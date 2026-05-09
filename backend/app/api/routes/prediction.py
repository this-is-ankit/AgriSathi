from fastapi import APIRouter, File, UploadFile
from app.schemas.common import SuccessResponse
from app.schemas.prediction import PredictionResult
from app.services.uploads.image_upload import process_uploaded_image
from app.core.logger import log

router = APIRouter()

@router.post("/scan", response_model=SuccessResponse[PredictionResult])
async def scan_crop(image: UploadFile = File(...)):
    log.info(f"Received scan request for image: {image.filename}")
    image_bytes = await process_uploaded_image(image)
    
    # Placeholder for AI inference service
    mock_result = PredictionResult(
        disease_name="Healthy",
        confidence=0.98,
        recommendations=["Continue current watering schedule.", "Apply standard fertilizer."]
    )
    
    return SuccessResponse(
        message="Scan completed successfully",
        data=mock_result
    )
