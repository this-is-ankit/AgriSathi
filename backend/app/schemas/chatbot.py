from pydantic import BaseModel, Field
from typing import List, Optional

class ChatMessage(BaseModel):
    role: str # "user" or "assistant"
    content: str
    timestamp: Optional[str] = None

class ChatRequest(BaseModel):
    message: str
    context_type: Optional[str] = None # e.g., "disease_scan", "weather_alert"
    context_data: Optional[dict] = None

class ChatResponse(BaseModel):
    reply: str
    suggestions: List[str] = []

class ChatbotHistory(BaseModel):
    id: str = Field(alias="_id")
    user_id: str
    messages: List[ChatMessage]
    created_at: str
    updated_at: str
