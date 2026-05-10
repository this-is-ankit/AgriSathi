from fastapi import APIRouter, Body, Depends, Query
from app.schemas.common import SuccessResponse
from app.schemas.chatbot import ChatRequest, ChatResponse, ChatMessage
from app.services.chatbot.chatbot_service import generate_reply
from app.database.mongodb import db_client
from typing import List

router = APIRouter()

@router.post("/message", response_model=SuccessResponse[ChatResponse])
async def send_message(req: ChatRequest = Body(...)):
    user_id = "user_123" # Mock auth
    
    response = await generate_reply(
        user_id=user_id,
        message=req.message,
        context_type=req.context_type,
        context_data=req.context_data
    )
    
    return SuccessResponse(
        message="Reply generated",
        data=response
    )

@router.get("/history", response_model=SuccessResponse[List[ChatMessage]])
async def get_history(limit: int = Query(50)):
    user_id = "user_123" # Mock auth
    
    messages = []
    if db_client.db is not None:
        chat_doc = await db_client.db["chatbot_history"].find_one({"user_id": user_id})
        if chat_doc and "messages" in chat_doc:
            messages = chat_doc["messages"][-limit:]
            
    # Convert dicts to ChatMessage objects to satisfy response_model
    formatted_messages = [ChatMessage(**m) for m in messages]
            
    return SuccessResponse(
        message="History retrieved",
        data=formatted_messages
    )
