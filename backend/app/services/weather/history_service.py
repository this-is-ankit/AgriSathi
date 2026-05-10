from datetime import datetime, timezone
from app.database.mongodb import db_client
from app.schemas.weather import WeatherResponse
from app.core.logger import log

def save_weather_history(lat: float, lon: float, result: WeatherResponse, user_id: str = "anonymous"):
    if db_client.db is None:
        return

    try:
        doc = {
            "user_id": user_id,
            "lat": lat,
            "lon": lon,
            "temperature": result.current.temperature,
            "condition": result.current.condition,
            "advisories_count": len(result.advisories),
            "timestamp": datetime.now(timezone.utc).isoformat()
        }
        db_client.db["weather_history"].insert_one(doc)
    except Exception as e:
        log.error(f"Failed to save weather history: {e}")
