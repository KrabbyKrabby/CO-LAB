from fastapi import FastAPI, HTTPException, status
from typing import List

# Import your models from the users.models file
from .users.models import UserCreate, UserDisplay

app = FastAPI()

# Mock database to store users
"""
TODO: Replace the mock database with a real database like MongoDB( wink wink `)


"""
db: List[UserDisplay] = []

@app.post("/users/", response_model=UserDisplay, status_code=status.HTTP_201_CREATED)
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
    db.append(new_user)
    return new_user

# Start the Uvicorn server to run the application
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
