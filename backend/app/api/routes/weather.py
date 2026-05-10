from fastapi import APIRouter, Query, BackgroundTasks
from app.schemas.common import SuccessResponse
from app.schemas.weather import WeatherResponse
from app.services.weather.weather_service import get_weather_and_advisories
from app.services.weather.history_service import save_weather_history

router = APIRouter()

@router.get("/current", response_model=SuccessResponse[WeatherResponse])
async def get_current_weather(
    background_tasks: BackgroundTasks,
    lat: float = Query(..., description="Latitude"),
    lon: float = Query(..., description="Longitude")
):
    result = await get_weather_and_advisories(lat, lon)
    
    # Save history non-blockingly
    background_tasks.add_task(save_weather_history, lat, lon, result)
    
    return SuccessResponse(
        message="Weather data fetched successfully",
        data=result
    )
