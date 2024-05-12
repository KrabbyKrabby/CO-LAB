from pydantic import BaseModel, EmailStr, HttpUrl, Field
from datetime import date
from typing import Optional, List

class UserBase(BaseModel):
    full_name: str
    email: EmailStr
    username: str  # Unique identifier

class UserCreate(UserBase):
    password: str = Field(..., min_length=8)
    confirm_password: Optional[str] = Field(None, min_length=8)
    registration_number: str
    # date_of_birth: date
    batch: str
    # avatar: Optional[HttpUrl] = None
    following_people: List[str] = []  # Change to List of usernames
    following_communities: List[str] = []  # List of community identifiers

    class Config:
        schema_extra = {
            "example": {
                "password": "password123",
                "confirm_password": "password123",
                "full_name": "John Doe",
                "email": "john.doe@example.com",
                "username": "johndoe",
                "registration_number": "123456789",
                "date_of_birth": "1990-01-01",
                "batch": "2022",
                "avatar": "http://example.com/avatar.jpg",
                "following_people": ["janedoe"],
                "following_communities": ["community1", "community2"]
            }
        }

class UserLogin(BaseModel):
    username: str  # Changed from email to username for primary login identifier
    password: str

    class Config:
        schema_extra = {
            "example": {
                "username": "johndoe",
                "password": "password123"
            }
        }

class UserDisplay(UserBase):
    bio: Optional[str] = None
    tech_stack: Optional[List[str]] = []
    experience: Optional[str] = None

    class Config:
        schema_extra = {
            "example": {
                "full_name": "John Doe",
                "email": "john.doe@example.com",
                "username": "johndoe",
                "bio": "Software Engineer with 10 years of experience.",
                "tech_stack": ["Python", "FastAPI", "Docker"],
                "experience": "Worked at several major tech firms."
            }
        }
