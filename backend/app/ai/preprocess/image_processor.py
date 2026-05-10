from io import BytesIO
from PIL import Image
from app.core.exceptions import FileUploadError

def preprocess_image(image_bytes: bytes) -> Image.Image:
    """
    Validates and converts image bytes into an RGB Pillow Image ready for inference.
    """
    try:
        image = Image.open(BytesIO(image_bytes))
        
        # Ensure image is in RGB format (e.g. drop alpha channel from PNGs)
        if image.mode != "RGB":
            image = image.convert("RGB")
            
        return image
    except Exception as e:
        raise FileUploadError("Image could not be read or is corrupted.") from e
