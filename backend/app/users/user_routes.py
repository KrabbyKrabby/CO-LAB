from fastapi import APIRouter, HTTPException, status
from typing import List
from .user_models import UserCreate, UserDisplay, UserLogin

router = APIRouter()

# Mock databases
db_user_create: List[UserCreate] = (
    []
)  # Database to store UserCreate objects with passwords
db_user_display: List[UserDisplay] = (
    []
)  # Database to store UserDisplay objects without sensitive data


@router.post(
    "/signup/", response_model=UserDisplay, status_code=status.HTTP_201_CREATED
)
def create_user(user: UserCreate):
    # Check for existing username or email
    if any(
        u.username == user.username or u.email == user.email for u in db_user_create
    ):
        raise HTTPException(status_code=400, detail="Username or email already exists")

    if user.password != user.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords do not match")

    # Store UserCreate object for complete data
    db_user_create.append(user)

    # Create and store UserDisplay object
    new_user_display = UserDisplay(
        username=user.username,
        full_name=user.full_name,
        email=user.email,
        bio="",
        tech_stack=[],
        experience="",
    )
    db_user_display.append(new_user_display)
    return new_user_display


@router.post("/login/")
def login(user_credentials: UserLogin):
    # Check username and password against UserCreate objects
    user = next(
        (u for u in db_user_create if u.username == user_credentials.username), None
    )
    if user is None or user.password != user_credentials.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"message": "Login successful", "username": user.username}
