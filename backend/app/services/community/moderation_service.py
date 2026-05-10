from fastapi import UploadFile, HTTPException

MAX_UPLOAD_SIZE = 10 * 1024 * 1024  # 10 MB
ALLOWED_CONTENT_TYPES = ["image/jpeg", "image/png", "image/jpg"]

def validate_post_content(caption: str):
    if not caption or len(caption.strip()) < 3:
        raise HTTPException(status_code=400, detail="Caption must be at least 3 characters long.")
    
    if len(caption) > 1000:
        raise HTTPException(status_code=400, detail="Caption cannot exceed 1000 characters.")
        
    # Future placeholder for spam/abusive words filter
    pass

def validate_image_upload(image: UploadFile):
    if image.content_type not in ALLOWED_CONTENT_TYPES:
        raise HTTPException(status_code=400, detail="Unsupported image format. Allowed: jpeg, png.")
        
    # We can check content length if provided by the framework or read chunks.
    # For now, relying on reverse-proxy/framework limits.
    pass
