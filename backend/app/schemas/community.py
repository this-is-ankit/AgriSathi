from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime

class CommunityPostCreate(BaseModel):
    caption: str
    tags: List[str] = []

class CommunityPost(BaseModel):
    id: str = Field(alias="_id")
    author_id: str
    author_name: str
    caption: str
    image_url: Optional[str] = None
    location: Optional[dict] = None
    tags: List[str] = []
    comment_count: int = 0
    helpful_count: int = 0
    created_at: str

class CommentCreate(BaseModel):
    post_id: str
    comment: str

class Comment(BaseModel):
    id: str = Field(alias="_id")
    post_id: str
    author_id: str
    author_name: str
    comment: str
    created_at: str

class FeedResponse(BaseModel):
    posts: List[CommunityPost]
    page: int
    has_more: bool
