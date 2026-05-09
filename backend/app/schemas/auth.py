from pydantic import BaseModel, Field
from typing import Optional

class LoginRequest(BaseModel):
    phone_number: str = Field(..., description="Phone number with country code")
    id_token: str = Field(..., description="Firebase ID Token")

class AuthResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user_id: str
