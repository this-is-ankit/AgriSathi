import uuid
from app.schemas.weather import WeatherData, Advisory

def generate_advisories(weather: WeatherData) -> list[Advisory]:
    """
    Lightweight rules engine that outputs farming advisories based on current weather.
    """
    advisories = []
    
    # Humidity / Fungal Risk Rule
    if weather.humidity > 85:
        advisories.append(
            Advisory(
                id=str(uuid.uuid4()),
                title="High Fungal Risk",
                description="High humidity detected. Keep an eye out for fungal diseases like Blight or Rust. Ensure good airflow if possible.",
                type="disease_risk",
                severity="high"
            )
        )
        
    # Rainfall / Irrigation Rule
    if weather.rainfall_prob > 50:
        advisories.append(
            Advisory(
                id=str(uuid.uuid4()),
                title="Rainfall Expected",
                description="High chance of rain. Pause irrigation today to prevent waterlogging and root rot.",
                type="irrigation",
                severity="medium"
            )
        )
    elif weather.temperature > 35 and weather.rainfall_prob < 10:
        advisories.append(
            Advisory(
                id=str(uuid.uuid4()),
                title="Heatwave Warning",
                description="High temperatures and dry conditions. Ensure adequate watering early morning or late evening.",
                type="irrigation",
                severity="high"
            )
        )
        
    # Fertilizer general advice
    if weather.rainfall_prob > 80:
        advisories.append(
            Advisory(
                id=str(uuid.uuid4()),
                title="Delay Fertilizer",
                description="Heavy rain expected. Avoid applying fertilizer as it may wash away.",
                type="general",
                severity="medium"
            )
        )
        
    # Fallback advisory if weather is perfectly normal
    if not advisories:
        advisories.append(
            Advisory(
                id=str(uuid.uuid4()),
                title="Optimal Conditions",
                description="Weather is currently favorable for most crops. Continue standard schedule.",
                type="general",
                severity="low"
            )
        )

    return advisories
