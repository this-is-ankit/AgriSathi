from pydantic import BaseModel
from typing import Any, Optional, Generic, TypeVar

T = TypeVar("T")

class BaseResponse(BaseModel):
    success: bool
    message: str

class SuccessResponse(BaseResponse, Generic[T]):
    success: bool = True
    data: Optional[T] = None

class ErrorResponse(BaseResponse):
    success: bool = False
    error_code: str
