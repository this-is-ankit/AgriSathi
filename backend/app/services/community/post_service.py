import uuid
from datetime import datetime, timezone
from typing import Tuple, List, Optional
from fastapi import UploadFile, HTTPException
from app.database.mongodb import db_client
from app.schemas.community import CommunityPost, CommunityPostCreate
from app.core.logger import log

async def get_feed(page: int = 1, limit: int = 10) -> Tuple[List[CommunityPost], bool]:
    if db_client.db is None:
        log.warning("MongoDB not connected. Returning empty feed.")
        return [], False
        
    skip = (page - 1) * limit
    cursor = db_client.db["community_posts"].find({ "is_deleted": { "$ne": True } }) \
        .sort("created_at", -1) \
        .skip(skip) \
        .limit(limit + 1)
        
    posts_data = await cursor.to_list(length=limit + 1)
    
    has_more = len(posts_data) > limit
    if has_more:
        posts_data = posts_data[:limit]
        
    posts = []
    for doc in posts_data:
        # Map _id object string from mongo to our schema
        doc["_id"] = str(doc["_id"])
        posts.append(CommunityPost(**doc))
        
    return posts, has_more

async def create_post(
    caption: str, 
    tags: List[str], 
    user_id: str, 
    user_name: str, 
    image_url: Optional[str] = None,
    location: Optional[dict] = None
) -> CommunityPost:
    if db_client.db is None:
        raise HTTPException(status_code=503, detail="Database unavailable")
        
    post_id = f"post_{uuid.uuid4().hex[:8]}"
    
    doc = {
        "_id": post_id,
        "author_id": user_id,
        "author_name": user_name,
        "caption": caption,
        "image_url": image_url,
        "location": location,
        "tags": tags,
        "comment_count": 0,
        "helpful_count": 0,
        "created_at": datetime.now(timezone.utc).isoformat(),
        "is_deleted": False
    }
    
    await db_client.db["community_posts"].insert_one(doc)
    
    return CommunityPost(**doc)
