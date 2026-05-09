from pydantic import BaseModel
from typing import List, Optional

class PredictionResult(BaseModel):
    disease_name: str
    confidence: float
    recommendations: List[str]

class PredictionHistory(BaseModel):
    id: str
    image_url: str
    result: PredictionResult
    timestamp: str
