from pydantic import BaseModel
from datetime import date
import uuid

class BlogDetails(BaseModel):
    id: uuid.UUID = None  # This field will be auto-generated
    username: str
    blog_title: str
    # blog_date: date
    blog_description: str
    associated_community: str

    class Config:
        schema_extra = {
            "example": {
                "username": "johndoe",
                "blog_title": "Innovative FastAPI Techniques",
                "blog_date": "2022-01-01",
                "blog_description": "This blog post describes some innovative techniques in using FastAPI.",
                "associated_community": "community1"
            }
        }
