from pydantic import BaseModel
from typing import List
import uuid

class CommunityDetails(BaseModel):
    id: uuid.UUID = None  # This field will be auto-generated
    community_name: str
    projects: List[uuid.UUID]
    blogs: List[uuid.UUID]

    class Config:
        schema_extra = {
            "example": {
                "community_name": "Tech Innovators",
                "projects": ["uuid1", "uuid2"],
                "blogs": ["uuid1", "uuid2"]
            }
        }
