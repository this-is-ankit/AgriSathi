from fastapi import APIRouter, Body
from app.schemas.common import SuccessResponse
from app.schemas.notifications import TokenRegistrationRequest
from app.services.notifications.notification_service import register_device_token, trigger_weather_alert

router = APIRouter()

@router.post("/register-token", response_model=SuccessResponse[bool])
async def register_token(req: TokenRegistrationRequest = Body(...)):
    user_id = "user_123" # Mock auth
    success = await register_device_token(user_id, req.fcm_token, req.device_id)
    
    if success:
        return SuccessResponse(message="Token registered successfully", data=True)
    return SuccessResponse(message="Failed to register token", data=False)

@router.post("/test-alert", response_model=SuccessResponse[bool])
async def test_alert():
    user_id = "user_123" # Mock auth
    await trigger_weather_alert(user_id, "Heavy Rain")
    return SuccessResponse(message="Test alert dispatched", data=True)
