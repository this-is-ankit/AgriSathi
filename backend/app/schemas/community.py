from pydantic import BaseModel
from typing import List, Optional

class CommunityPostCreate(BaseModel):
    title: str
    content: str
    image_url: Optional[str] = None

class CommunityPost(CommunityPostCreate):
    id: str
    author_id: str
    timestamp: str
    likes: int
