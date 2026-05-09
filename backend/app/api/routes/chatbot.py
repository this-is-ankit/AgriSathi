from fastapi import APIRouter
from pydantic import BaseModel
from app.schemas.common import SuccessResponse

class ChatMessage(BaseModel):
    message: str

class ChatResponse(BaseModel):
    reply: str

router = APIRouter()

@router.post("/ask", response_model=SuccessResponse[ChatResponse])
async def ask_chatbot(msg: ChatMessage):
    # Placeholder for chatbot integration
    return SuccessResponse(
        message="Chatbot replied",
        data=ChatResponse(reply="This is a placeholder response from AgriSathi bot.")
    )
