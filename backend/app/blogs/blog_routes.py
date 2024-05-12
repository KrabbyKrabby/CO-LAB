from fastapi import APIRouter, HTTPException, status
from typing import List
from .blog_models import BlogDetails  # Ensure the import path is correct
from ..mongo import connect as mongoDB
import uuid

router = APIRouter()

@router.post("/create", status_code=status.HTTP_201_CREATED)
def create_blog(blog: BlogDetails):
    blog.id = uuid.uuid4()  # Generate unique ID
    success = mongoDB.add_blog(blog)
    
    if success: return {"success": True, "message": "Blog created successfully"}
    else: raise HTTPException(status_code=400, detail="Failed to create blog")

@router.get("/", response_model=List[BlogDetails])
def get_blogs():
    return mongoDB.get_blogs()

@router.get("/{blog_id}", response_model=BlogDetails)
def get_blog(blog_id: uuid.UUID):
    return mongoDB.get_blog(blog_id)

@router.put("/{blog_id}")
def update_blog(blog_id: uuid.UUID, blog_update: BlogDetails):
    success = mongoDB.update_blog(blog_id, blog_update)
    if success: return {"success": True, "message": "Blog updated successfully"}
    if success == 0: raise HTTPException(status_code=404, detail="Blog not found")
    if success is None: raise HTTPException(status_code=400, detail="Failed to update blog")

@router.delete("/{blog_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_blog(blog_id: uuid.UUID):
    success = mongoDB.delete_blog(blog_id)
    if success: return {"success": True, "message": "Blog deleted successfully"}
    if success == 0: raise HTTPException(status_code=404, detail="Blog not found")
    if success is None: raise HTTPException(status_code=400, detail="Failed to delete blog")
