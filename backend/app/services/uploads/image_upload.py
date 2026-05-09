from fastapi import UploadFile
from app.services.uploads.validators import validate_image, MAX_FILE_SIZE
from app.services.uploads.compression import compress_image
from app.core.exceptions import FileUploadError

async def process_uploaded_image(file: UploadFile) -> bytes:
    validate_image(file)
    
    # Read and check size
    image_bytes = await file.read()
    if len(image_bytes) > MAX_FILE_SIZE:
        raise FileUploadError(f"Image size is too large. Maximum allowed size is {MAX_FILE_SIZE // (1024 * 1024)} MB.")
        
    compressed_bytes = await compress_image(image_bytes)
    return compressed_bytes
