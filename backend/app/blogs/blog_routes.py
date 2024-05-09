from fastapi import APIRouter, HTTPException, status
from typing import List
from .blog_models import BlogDetails  # Ensure the import path is correct
import uuid

router = APIRouter()

# This will serve as our mock database for blogs
blogs_db: List[BlogDetails] = []

@router.post("/create/", response_model=BlogDetails, status_code=status.HTTP_201_CREATED)
def create_blog(blog: BlogDetails):
    blog.id = uuid.uuid4()  # Generate unique ID
    blogs_db.append(blog)
    return blog

@router.get("/", response_model=List[BlogDetails])
def get_blogs():
    return blogs_db

@router.get("/{blog_id}", response_model=BlogDetails)
def get_blog(blog_id: uuid.UUID):
    blog = next((b for b in blogs_db if b.id == blog_id), None)
    if blog is None:
        raise HTTPException(status_code=404, detail="Blog not found")
    return blog

@router.put("/{blog_id}", response_model=BlogDetails)
def update_blog(blog_id: uuid.UUID, blog_update: BlogDetails):
    index = next((i for i, b in enumerate(blogs_db) if b.id == blog_id), None)
    if index is None:
        raise HTTPException(status_code=404, detail="Blog not found")
    # Ensure the ID remains unchanged
    blog_update.id = blogs_db[index].id
    blogs_db[index] = blog_update
    return blog_update

@router.delete("/{blog_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_blog(blog_id: uuid.UUID):
    index = next((i for i, b in enumerate(blogs_db) if b.id == blog_id), None)
    if index is None:
        raise HTTPException(status_code=404, detail="Blog not found")
    blogs_db.pop(index)
    return {"message": "Blog deleted successfully"}
