from pydantic import BaseModel
from typing import List

class WeatherAdvisory(BaseModel):
    title: str
    description: str

class WeatherSummary(BaseModel):
    temperature: float
    condition: str
    humidity: int
    advisories: List[WeatherAdvisory]
