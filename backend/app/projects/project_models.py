from pydantic import BaseModel, HttpUrl, field_serializer
from typing import List
import uuid

from pydantic_core import Url

class ProjectDetails(BaseModel):
    id: uuid.UUID = None  # This field will be auto-generated
    username: str
    project_name: str
    project_description: str
    features: List[str]
    tech_stack: List[str]
    github_link: HttpUrl
    youtube_link: HttpUrl
    images: List[HttpUrl]
    associated_community: str
    
    @field_serializer('github_link')
    def url2str_github(self, val) -> str:
        if isinstance(val, Url):
            return str(val)
        return val

    @field_serializer('youtube_link')
    def url2str_youtube(self, val) -> str:
        if isinstance(val, Url):
            return str(val)
        return val

    @field_serializer('images')
    def images2str(self, val: List[HttpUrl]) -> List[str]:
        return [str(url) for url in val]

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
