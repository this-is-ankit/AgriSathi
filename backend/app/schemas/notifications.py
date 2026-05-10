from pydantic import BaseModel
from typing import Optional, Dict, Any

class TokenRegistrationRequest(BaseModel):
    fcm_token: str
    device_id: str

class NotificationPayload(BaseModel):
    title: str
    body: str
    data: Optional[Dict[str, Any]] = None

class NotificationPreferences(BaseModel):
    weather_alerts: bool = True
    disease_alerts: bool = True
    community_mentions: bool = True
    advisory_reminders: bool = True
