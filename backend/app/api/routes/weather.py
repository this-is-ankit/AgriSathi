from fastapi import APIRouter, Query
from app.schemas.common import SuccessResponse
from app.schemas.weather import WeatherSummary

router = APIRouter()

@router.get("/summary", response_model=SuccessResponse[WeatherSummary])
async def get_weather(lat: float = Query(...), lon: float = Query(...)):
    # Placeholder for weather service integration
    mock_weather = WeatherSummary(
        temperature=28.5,
        condition="Clear",
        humidity=65,
        advisories=[]
    )
    
    return SuccessResponse(
        message="Weather fetched successfully",
        data=mock_weather
    )
