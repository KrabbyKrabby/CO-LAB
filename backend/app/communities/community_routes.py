from fastapi import APIRouter, HTTPException, status
from typing import List
from .community_models import CommunityDetails  # Ensure the import path is correct
from ..mongo import connect as mongoDB
import uuid

router = APIRouter()

# This will serve as our mock database for communities
communities_db: List[CommunityDetails] = []

@router.post("/create", status_code=status.HTTP_201_CREATED)
def create_community(community: CommunityDetails):
    
    community.id = uuid.uuid4()  # Generate unique ID
    
    success = mongoDB.add_community(community)
    
    if success: return {"success": True, "message": "Community created successfully"}
    else: raise HTTPException(status_code=400, detail="Failed to create community")

@router.get("/", response_model=List[CommunityDetails])
def get_communities():
    return mongoDB.get_communities()

@router.get("/{community_id}", response_model=CommunityDetails)
def get_community(community_id: uuid.UUID):
    return mongoDB.get_community(community_id)


@router.put("/{community_id}", response_model=CommunityDetails)
def update_community(community_id: uuid.UUID, community_update: CommunityDetails):
    community_update.id = community_id

    success = mongoDB.update_community(community_id, community_update)
    if success: return {"success": True, "message": "Community updated successfully"}
    if success == 0: raise HTTPException(status_code=404, detail="Community not found")
    if success is None: raise HTTPException(status_code=400, detail="Failed to update community")


@router.delete("/{community_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_community(community_id: uuid.UUID):
    success = mongoDB.delete_community(community_id)
    if success: return {"success": True, "message": "Community deleted successfully"}
    if success == 0: raise HTTPException(status_code=404, detail="Community not found")
    if success is None: raise HTTPException(status_code=400, detail="Failed to delete community")
