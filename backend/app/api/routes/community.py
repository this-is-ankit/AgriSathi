from fastapi import APIRouter, Query, Body, Depends, Form, UploadFile
from app.schemas.common import SuccessResponse
from app.schemas.community import CommunityPost, CommunityPostCreate, CommentCreate, Comment, FeedResponse
from app.services.community import post_service, comment_service, moderation_service
from typing import List, Optional

router = APIRouter()

@router.get("/feed", response_model=SuccessResponse[FeedResponse])
async def get_feed(page: int = Query(1), limit: int = Query(10)):
    posts, has_more = await post_service.get_feed(page, limit)
    return SuccessResponse(
        message="Feed retrieved successfully",
        data=FeedResponse(posts=posts, page=page, has_more=has_more)
    )

@router.post("/post", response_model=SuccessResponse[CommunityPost])
async def create_post(
    caption: str = Form(...),
    tags: str = Form("[]"),
    image: Optional[UploadFile] = None
):
    moderation_service.validate_post_content(caption)
    
    if image:
        moderation_service.validate_image_upload(image)
        # In a real system, upload to S3/Firebase Storage here and get URL
        image_url = f"https://mockstorage.agrisathi.in/images/{image.filename}"
    else:
        image_url = None
        
    import json
    try:
        tags_list = json.loads(tags)
    except:
        tags_list = []
    
    user_id = "user_123"
    user_name = "Farmer Ankit"
    
    new_post = await post_service.create_post(
        caption=caption,
        tags=tags_list,
        user_id=user_id,
        user_name=user_name,
        image_url=image_url,
        location={"state": "Local"}
    )
    
    return SuccessResponse(
        message="Post created successfully",
        data=new_post
    )

@router.get("/comments/{post_id}", response_model=SuccessResponse[List[Comment]])
async def get_comments(post_id: str, page: int = Query(1)):
    comments = await comment_service.get_comments(post_id, page=page)
    return SuccessResponse(
        message="Comments retrieved successfully",
        data=comments
    )

@router.post("/comment", response_model=SuccessResponse[Comment])
async def create_comment(comment_req: CommentCreate = Body(...)):
    moderation_service.validate_post_content(comment_req.comment) # reuse validation
    
    user_id = "user_123"
    user_name = "Farmer Ankit"
    
    new_comment = await comment_service.create_comment(
        post_id=comment_req.post_id,
        comment_text=comment_req.comment,
        user_id=user_id,
        user_name=user_name
    )
    
    return SuccessResponse(
        message="Comment added successfully",
        data=new_comment
    )
