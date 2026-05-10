import time
from typing import Dict, Any, Optional
from app.core.logger import log

# In-memory dictionary: key: "lat,lon" -> value: {"timestamp": float, "data": dict}
_weather_cache: Dict[str, Dict[str, Any]] = {}
CACHE_TTL = 30 * 60  # 30 minutes in seconds

def get_cache_key(lat: float, lon: float) -> str:
    """
    Round lat/lon to 2 decimal places (approx ~1.1km resolution).
    This aggregates cache hits for farmers in the exact same village/area.
    """
    return f"{round(lat, 2)},{round(lon, 2)}"

def get_cached_weather(lat: float, lon: float) -> Optional[dict]:
    key = get_cache_key(lat, lon)
    entry = _weather_cache.get(key)
    
    if entry:
        if time.time() - entry["timestamp"] < CACHE_TTL:
            log.info(f"Weather cache hit for {key}")
            return entry["data"]
        else:
            # Expired
            del _weather_cache[key]
            
    return None

def set_cached_weather(lat: float, lon: float, data: dict):
    key = get_cache_key(lat, lon)
    _weather_cache[key] = {
        "timestamp": time.time(),
        "data": data
    }
    log.info(f"Weather cache updated for {key}")
