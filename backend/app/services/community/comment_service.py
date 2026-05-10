import uuid
from datetime import datetime, timezone
from typing import List
from fastapi import HTTPException
from app.database.mongodb import db_client
from app.schemas.community import Comment
from app.core.logger import log

def get_comments(post_id: str, page: int = 1, limit: int = 20) -> List[Comment]:
    if db_client.db is None:
        return []
        
    skip = (page - 1) * limit
    cursor = db_client.db["comments"].find({"post_id": post_id, "is_deleted": { "$ne": True }}) \
        .sort("created_at", 1) \
        .skip(skip) \
        .limit(limit)
        
    comments = []
    for doc in cursor:
        doc["_id"] = str(doc["_id"])
        comments.append(Comment(**doc))
        
    return comments

def create_comment(post_id: str, comment_text: str, user_id: str, user_name: str) -> Comment:
    if db_client.db is None:
        raise HTTPException(status_code=503, detail="Database unavailable")
        
    # Check if post exists
    post = db_client.db["community_posts"].find_one({"_id": post_id})
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
    
    db_client.db["comments"].insert_one(doc)
    
    # Increment comment count asynchronously ideally, but doing it here directly for simplicity
    db_client.db["community_posts"].update_one(
        {"_id": post_id},
        {"$inc": {"comment_count": 1}}
    )
    
    return Comment(**doc)
