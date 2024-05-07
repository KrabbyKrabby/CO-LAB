from fastapi import APIRouter, HTTPException, status
from typing import List
from .models import UserCreate, UserDisplay, UserLogin

router = APIRouter()

db: List[UserCreate] = []


@router.post("/signup/", response_model=UserCreate, status_code=status.HTTP_201_CREATED)
def create_user(user: UserCreate):
    if user.password != user.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords do not match")
    
    new_user = UserCreate(
        full_name=user.full_name,
        email=user.email,
        username=user.username,
        password=user.password,
        confirm_password=user.confirm_password,
        registration_number=user.registration_number,
        date_of_birth=user.date_of_birth,
        batch=user.batch,
        avatar=user.avatar,
        following_people=user.following_people,
        following_communities=user.following_communities
    )

    # check if the user already exists
    for user_ in db:
        if user_.email == user.email:
            raise HTTPException(status_code=400, detail="User already exists")

    db.append(new_user)
    print(db)

    return new_user


@router.post("/login/")
def login(user_credentials: UserLogin):
    user = next((u for u in db if u.email == user_credentials.email), None)
    if user is None or user.password != user_credentials.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"message": "Login successful", "user": user}
