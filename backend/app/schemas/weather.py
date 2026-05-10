from pydantic import BaseModel
from typing import List, Optional

class WeatherData(BaseModel):
    temperature: float
    humidity: int
    rainfall_prob: int  # 0 to 100 percentage
    condition: str      # e.g., "Clear", "Rain", "Cloudy"
    icon: str           # e.g., "10d"
    location_name: str

class Advisory(BaseModel):
    id: str
    title: str
    description: str
    type: str # "disease_risk", "irrigation", "general"
    severity: str # "low", "medium", "high"

class WeatherResponse(BaseModel):
    current: WeatherData
    advisories: List[Advisory]
    cached: bool = False
