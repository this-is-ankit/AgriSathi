from fastapi import UploadFile
from app.core.exceptions import FileUploadError

ALLOWED_EXTENSIONS = {"jpg", "jpeg", "png"}
MAX_FILE_SIZE = 10 * 1024 * 1024  # 10 MB

def validate_image(file: UploadFile) -> None:
    if not file.filename:
        raise FileUploadError("No filename provided")

    ext = file.filename.split('.')[-1].lower()
    if ext not in ALLOWED_EXTENSIONS:
        raise FileUploadError(f"Unsupported image format. Allowed formats: {', '.join(ALLOWED_EXTENSIONS)}")

    # We do not strictly check size here as file.size might not be populated until read,
    # but we will check it during the read process or if Content-Length is provided.
    if file.size and file.size > MAX_FILE_SIZE:
        raise FileUploadError(f"Image size is too large. Maximum allowed size is {MAX_FILE_SIZE // (1024 * 1024)} MB.")
