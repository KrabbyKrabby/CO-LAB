from pydantic import BaseModel, EmailStr, HttpUrl, Field
from datetime import date
from typing import Optional

class UserBase(BaseModel):
    full_name: str
    email: EmailStr
    username: str

class UserCreate(UserBase):
    password: str = Field(..., min_length=8)
    confirm_password: str = Field(..., min_length=8)
    registration_number: str
    date_of_birth: date
    batch: str
    avatar: Optional[HttpUrl] = None
    following_people: list = []
    following_communities: list = []

    class Config:
        schema_extra = {
            "example": {
                "full_name": "John Doe",
                "email": "john.doe@example.com",
                "username": "johndoe",
                "password": "password123",
                "confirm_password": "password123",
                "registration_number": "123456789",
                "date_of_birth": "1990-01-01",
                "batch": "2022",
                "avatar": "http://example.com/avatar.jpg",
                "following_people": [],
                "following_communities": []
            }
        }

class UserLogin(BaseModel):
    email: EmailStr
    password: str

    class Config:
        schema_extra = {
            "example": {
                "email": "john.doe@example.com",
                "password": "password123"
            }
        }

class UserDisplay(UserBase):
    id: int
    bio: Optional[str] = None
    tech_stack: Optional[list] = []
    experience: Optional[str] = None

    class Config:
        schema_extra = {
            "example": {
                "id": 1,
                "full_name": "John Doe",
                "email": "john.doe@example.com",
                "username": "johndoe",
                "bio": "Software Engineer with 10 years of experience.",
                "tech_stack": ["Python", "FastAPI", "Docker"],
                "experience": "Worked at several major tech firms."
            }
        }
