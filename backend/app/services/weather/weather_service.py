import httpx
from fastapi import HTTPException
from app.core.config import settings
from app.core.logger import log
from app.schemas.weather import WeatherData, WeatherResponse
from app.services.weather.weather_cache import get_cached_weather, set_cached_weather
from app.services.weather.advisory_engine import generate_advisories

async def get_weather_and_advisories(lat: float, lon: float) -> WeatherResponse:
    # 1. Check Cache
    cached_data = get_cached_weather(lat, lon)
    if cached_data:
        weather = WeatherData(**cached_data)
        advisories = generate_advisories(weather)
        return WeatherResponse(current=weather, advisories=advisories, cached=True)

    # 2. Fetch from OpenWeatherMap API
    if not settings.OPENWEATHER_API_KEY:
        log.warning("OPENWEATHER_API_KEY is not set. Using mocked weather data.")
        weather = _get_mocked_weather(lat, lon)
    else:
        try:
            url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={settings.OPENWEATHER_API_KEY}&units=metric"
            async with httpx.AsyncClient(timeout=10.0) as client:
                response = await client.get(url)
                response.raise_for_status()
                data = response.json()
                
                condition = data['weather'][0]['main']
                
                # OpenWeatherMap current doesn't have pop (probability of precipitation) in free tier.
                # Inferring based on condition for demonstration purposes.
                rainfall_prob = 0
                if "Rain" in condition or "Drizzle" in condition or "Thunderstorm" in condition:
                    rainfall_prob = 85
                elif "Cloud" in condition:
                    rainfall_prob = 30
                    
                weather = WeatherData(
                    temperature=data['main']['temp'],
                    humidity=data['main']['humidity'],
                    rainfall_prob=rainfall_prob,
                    condition=condition,
                    icon=data['weather'][0]['icon'],
                    location_name=data.get('name', 'Unknown Location')
                )
        except httpx.HTTPError as e:
            log.error(f"Weather API failed: {e}")
            raise HTTPException(status_code=503, detail="Weather service unavailable")
    
    # 3. Update Cache
    set_cached_weather(lat, lon, weather.model_dump())
    
    # 4. Generate Advisories
    advisories = generate_advisories(weather)
    
    return WeatherResponse(current=weather, advisories=advisories, cached=False)

def _get_mocked_weather(lat: float, lon: float) -> WeatherData:
    return WeatherData(
        temperature=32.5,
        humidity=78,
        rainfall_prob=15,
        condition="Clouds",
        icon="04d",
        location_name="Agri Farm"
    )
