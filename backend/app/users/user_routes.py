from fastapi import APIRouter, HTTPException, status
from typing import List
from .user_models import UserCreate, UserDisplay, UserLogin
from ..mongo import connect as mongoDB

router = APIRouter()

db_initialized: bool = mongoDB.initialize_database()

@router.post("/signup/", status_code=status.HTTP_201_CREATED)
def create_user(user: UserCreate):
    
    if user.password != user.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords do not match")

    # Store UserCreate object for complete data
    if db_initialized is False:
        if mongoDB.initialize_database() is False:
            raise HTTPException(status_code=500, detail="Failed to connect to database")
    if not mongoDB.add_user(user):
        raise HTTPException(status_code=400, detail="Username or email already exists")
        

    return {"success": True, "message": "User created successfully"}


@router.post("/login/")
def login(user_credentials: UserLogin):
    
    if db_initialized is False:
        if mongoDB.initialize_database() is False:
            raise HTTPException(status_code=500, detail="Failed to connect to database")
        
    user = mongoDB.auth_user(user_credentials)
    if user is None:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    return {"message": "Login successful", "username": user_credentials.username}


