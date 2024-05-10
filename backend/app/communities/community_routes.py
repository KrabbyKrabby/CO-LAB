from fastapi import APIRouter, HTTPException, status
from typing import List
from .community_models import CommunityDetails  # Ensure the import path is correct
import uuid

router = APIRouter()

# This will serve as our mock database for communities
communities_db: List[CommunityDetails] = []

@router.post("/create/", response_model=CommunityDetails, status_code=status.HTTP_201_CREATED)
def create_community(community: CommunityDetails):
    if any(c.community_name == community.community_name for c in communities_db):
        raise HTTPException(status_code=400, detail="Community name already exists")
    community.id = uuid.uuid4()  # Generate unique ID
    communities_db.append(community)
    return community

@router.get("/", response_model=List[CommunityDetails])
def get_communities():
    return communities_db

@router.get("/{community_id}", response_model=CommunityDetails)
def get_community(community_id: uuid.UUID):
    community = next((c for c in communities_db if c.id == community_id), None)
    if community is None:
        raise HTTPException(status_code=404, detail="Community not found")
    return community


@router.put("/{community_id}", response_model=CommunityDetails)
def update_community(community_id: uuid.UUID, community_update: CommunityDetails):
    index = next((i for i, c in enumerate(communities_db) if c.id == community_id), None)
    if index is None:
        raise HTTPException(status_code=404, detail="Community not found")
    if any(c.community_name == community_update.community_name and c.id != community_id for c in communities_db):
        raise HTTPException(status_code=400, detail="Community name already exists")
    community_update.id = communities_db[index].id
    communities_db[index] = community_update
    return community_update


@router.delete("/{community_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_community(community_id: uuid.UUID):
    index = next((i for i, c in enumerate(communities_db) if c.id == community_id), None)
    if index is None:
        raise HTTPException(status_code=404, detail="Community not found")
    communities_db.pop(index)
    return {"message": "Community deleted successfully"}
