import os
import uuid
from datetime import datetime, timezone
from typing import List, Optional
from fastapi import HTTPException
from app.database.mongodb import db_client
from app.schemas.chatbot import ChatMessage, ChatResponse
from app.services.chatbot.prompt_builder import build_system_prompt, format_context
from app.services.chatbot.response_formatter import extract_suggestions, generate_default_suggestions
from app.core.logger import log
from litellm import acompletion

async def generate_reply(user_id: str, message: str, context_type: Optional[str] = None, context_data: Optional[dict] = None) -> ChatResponse:
    # 1. Fetch recent chat history
    history = []
    if db_client.db is not None:
        chat_doc = await db_client.db["chatbot_history"].find_one({"user_id": user_id})
        if chat_doc and "messages" in chat_doc:
            # Get last 10 messages for context
            history = chat_doc["messages"][-10:]
            
    # 2. Build Prompt
    system_prompt = build_system_prompt()
    context_str = format_context(context_type, context_data)
    
    messages = [{"role": "system", "content": system_prompt + context_str}]
    
    for h in history:
        messages.append({"role": h["role"], "content": h["content"]})
        
    messages.append({"role": "user", "content": message})
    
    # 3. Call LLM
    try:
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            log.warning("GEMINI_API_KEY not found, using mocked chatbot response")
            reply_text = "I am a mocked AgriSathi assistant. Please configure an API key for full AI capabilities.\nTo help with your crops, ensure proper irrigation and monitor for pests."
        else:
            response = await acompletion(
                model="gemini/gemini-1.5-flash",
                messages=messages,
                api_key=api_key,
                max_tokens=300
            )
            reply_text = str(response.choices[0].message.content) # type: ignore
    except Exception as e:
        log.error(f"Chatbot inference failed: {e}")
        reply_text = "I'm sorry, I'm having trouble connecting to my agricultural database right now. Please try again later."
        
    # 4. Format and extract suggestions
    clean_text, suggestions = extract_suggestions(reply_text)
    if not suggestions:
        suggestions = generate_default_suggestions(context_type)
        
    # 5. Save history asynchronously
    await save_message_to_history(user_id, "user", message)
    await save_message_to_history(user_id, "assistant", clean_text)
    
    return ChatResponse(reply=clean_text, suggestions=suggestions)

async def save_message_to_history(user_id: str, role: str, content: str):
    if db_client.db is None:
        return
        
    msg = {
        "role": role,
        "content": content,
        "timestamp": datetime.now(timezone.utc).isoformat()
    }
    
    await db_client.db["chatbot_history"].update_one(
        {"user_id": user_id},
        {
            "$push": {"messages": msg},
            "$setOnInsert": {
                "_id": f"chat_{uuid.uuid4().hex[:8]}",
                "created_at": datetime.now(timezone.utc).isoformat()
            },
            "$set": {
                "updated_at": datetime.now(timezone.utc).isoformat()
            }
        },
        upsert=True
    )
