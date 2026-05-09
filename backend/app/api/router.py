from fastapi import APIRouter
from app.api.routes import auth, prediction, weather, community, chatbot

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["Authentication"])
api_router.include_router(prediction.router, prefix="/predict", tags=["Prediction"])
api_router.include_router(weather.router, prefix="/weather", tags=["Weather"])
api_router.include_router(community.router, prefix="/community", tags=["Community"])
api_router.include_router(chatbot.router, prefix="/chatbot", tags=["Chatbot"])
