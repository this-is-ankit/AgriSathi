from fastapi import APIRouter, File, UploadFile
from app.schemas.common import SuccessResponse
from app.schemas.prediction import PredictionResult
from app.services.uploads.image_upload import process_uploaded_image
from app.services.prediction.prediction_service import run_inference
from app.services.prediction.history_service import save_prediction_history
from app.core.logger import log

router = APIRouter()

@router.post("/scan", response_model=SuccessResponse[PredictionResult])
async def scan_crop(image: UploadFile = File(...)):
    log.info(f"Received scan request for image: {image.filename}")
    
    # Process and compress image bytes
    image_bytes = await process_uploaded_image(image)
    
    # Run the AI inference pipeline
    result = await run_inference(image_bytes)
    
    # Save prediction history to MongoDB
    await save_prediction_history(result)
    
    return SuccessResponse(
        message="Scan completed successfully",
        data=result
    )
