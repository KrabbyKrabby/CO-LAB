from fastapi import APIRouter, HTTPException, status
from typing import List
from .models import UserCreate, UserDisplay

router = APIRouter()

db: List[UserDisplay] = []

@router.post("/", response_model=UserDisplay, status_code=status.HTTP_201_CREATED)
def create_user(user: UserCreate):
    if user.password != user.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords do not match")
    new_user = UserDisplay(
        id=len(db) + 1,
        full_name=user.full_name,
        email=user.email,
        username=user.username,
        bio="",
        tech_stack=[],
        experience=""
    )
    
    # check if the user already exists
    for user_ in db:
        if user_.email == user.email:
            raise HTTPException(status_code=400, detail="User already exists")
    
    db.append(new_user)
    
    
    return new_user



