from fastapi import APIRouter
from app.schemas.common import SuccessResponse
from app.schemas.auth import LoginRequest, AuthResponse

router = APIRouter()

@router.post("/login", response_model=SuccessResponse[AuthResponse])
async def login(request: LoginRequest):
    # Placeholder for auth service integration
    return SuccessResponse(
        message="Login successful",
        data=AuthResponse(access_token="mock_token", user_id="mock_user_id")
    )
