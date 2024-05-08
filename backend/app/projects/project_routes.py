from fastapi import APIRouter, HTTPException, status
from typing import List
from .project_models import ProjectDetails  # Ensure the import path is correct

router = APIRouter()

# This will serve as our mock database for projects
projects_db: List[ProjectDetails] = []

@router.post("/create/", response_model=ProjectDetails, status_code=status.HTTP_201_CREATED)
def create_project(project: ProjectDetails):
    projects_db.append(project)
    return project

@router.get("/", response_model=List[ProjectDetails])
def get_projects():
    return projects_db

@router.get("/{project_name}", response_model=ProjectDetails)
def get_project(project_name: str):
    project = next((p for p in projects_db if p.project_name == project_name), None)
    if project is None:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

@router.put("/{project_name}", response_model=ProjectDetails)
def update_project(project_name: str, project_update: ProjectDetails):
    index = next((i for i, p in enumerate(projects_db) if p.project_name == project_name), None)
    if index is None:
        raise HTTPException(status_code=404, detail="Project not found")
    projects_db[index] = project_update
    return project_update

@router.delete("/{project_name}", status_code=status.HTTP_204_NO_CONTENT)
def delete_project(project_name: str):
    index = next((i for i, p in enumerate(projects_db) if p.project_name == project_name), None)
    if index is None:
        raise HTTPException(status_code=404, detail="Project not found")
    projects_db.pop(index)
    return {"message": "Project deleted successfully"}
