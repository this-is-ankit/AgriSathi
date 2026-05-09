from fastapi import APIRouter
from app.schemas.common import SuccessResponse
from app.schemas.community import CommunityPost, CommunityPostCreate
from typing import List

router = APIRouter()

@router.get("/posts", response_model=SuccessResponse[List[CommunityPost]])
async def get_posts():
    # Placeholder for database integration
    return SuccessResponse(
        message="Posts retrieved successfully",
        data=[]
    )

@router.post("/posts", response_model=SuccessResponse[CommunityPost])
async def create_post(post: CommunityPostCreate):
    # Placeholder
    mock_post = CommunityPost(
        id="post_123",
        author_id="user_123",
        timestamp="2023-01-01T12:00:00Z",
        likes=0,
        **post.model_dump()
    )
    return SuccessResponse(
        message="Post created successfully",
        data=mock_post
    )
