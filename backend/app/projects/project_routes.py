from fastapi import APIRouter, HTTPException, status
from typing import List
import uuid

from .project_models import ProjectDetails  # Ensure the import path is correct
from ..mongo import connect as mongoDB

router = APIRouter()

@router.post("/create", status_code=status.HTTP_201_CREATED)
def create_project(project: ProjectDetails):
    project.id = uuid.uuid4()  # Generate unique ID
        
    success = mongoDB.add_project(project)
    
    if success: return {"success": True, "message": "Project created successfully"}
    else: raise HTTPException(status_code=400, detail="Failed to create project")
    
@router.get("/", response_model=List[ProjectDetails])
def get_projects():
    return mongoDB.get_projects()

@router.get("/{project_id}", response_model=ProjectDetails)
def get_project(project_id: uuid.UUID):
    return mongoDB.get_project(project_id)

@router.put("/{project_id}", )
def update_project(project_id: uuid.UUID, project_update: ProjectDetails):

    # returns number of documents updated
    update_success = mongoDB.update_project(project_id, project_update)
    if update_success: return {"success": True, "message": "Project updated successfully"}
    if update_success == 0: raise HTTPException(status_code=404, detail="Project not found")
    if update_success is None: raise HTTPException(status_code=400, detail="Failed to update project")

@router.delete("/{project_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_project(project_id: uuid.UUID):

    # returns number of documents deleted
    delete_success = mongoDB.delete_project(project_id)
    if delete_success: return {"success": True, "message": "Project deleted successfully"}
    if delete_success == 0: raise HTTPException(status_code=404, detail="Project not found")
    if delete_success is None: raise HTTPException(status_code=400, detail="Failed to delete project")
