import uuid
from datetime import datetime, timezone
from typing import List
from fastapi import HTTPException
from app.database.mongodb import db_client
from app.schemas.community import Comment
from app.core.logger import log

async def get_comments(post_id: str, page: int = 1, limit: int = 20) -> List[Comment]:
    if db_client.db is None:
        return []
        
    skip = (page - 1) * limit
    cursor = db_client.db["comments"].find({"post_id": post_id, "is_deleted": { "$ne": True }}) \
        .sort("created_at", 1) \
        .skip(skip) \
        .limit(limit)
        
    comments = []
    docs = await cursor.to_list(length=limit)
    for doc in docs:
        doc["_id"] = str(doc["_id"])
        comments.append(Comment(**doc))
        
    return comments

async def create_comment(post_id: str, comment_text: str, user_id: str, user_name: str) -> Comment:
    if db_client.db is None:
        raise HTTPException(status_code=503, detail="Database unavailable")
        
    # Check if post exists
    post = await db_client.db["community_posts"].find_one({"_id": post_id})
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
        
    comment_id = f"comment_{uuid.uuid4().hex[:8]}"
    
    doc = {
        "_id": comment_id,
        "post_id": post_id,
        "author_id": user_id,
        "author_name": user_name,
        "comment": comment_text,
        "created_at": datetime.now(timezone.utc).isoformat(),
        "is_deleted": False
    }
    
    await db_client.db["comments"].insert_one(doc)
    
    # Increment comment count
    await db_client.db["community_posts"].update_one(
        {"_id": post_id},
        {"$inc": {"comment_count": 1}}
    )
    
    return Comment(**doc)
