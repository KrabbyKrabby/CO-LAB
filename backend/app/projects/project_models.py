from pydantic import BaseModel, HttpUrl
from typing import List

class ProjectDetails(BaseModel):
    username: str
    project_name: str
    project_description: str
    features: List[str]
    tech_stack: List[str]
    github_link: HttpUrl
    youtube_link: HttpUrl
    images: List[HttpUrl]
    associated_community: str

    class Config:
        schema_extra = {
            "example": {
                "username": "johndoe",
                "project_name": "Example Project",
                "project_description": "A comprehensive example project.",
                "features": ["Feature 1", "Feature 2"],
                "tech_stack": ["Python", "FastAPI", "Docker"],
                "github_link": "https://example.com/github",
                "youtube_link": "https://example.com/youtube",
                "images": ["http://example.com/image1.jpg", "http://example.com/image2.jpg"],
                "associated_community": "community1"
            }
        }
