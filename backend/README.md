

# Schemas

## User

### `UserBase`

```json
{
  "full_name": "string",
  "email": "string",
  "username": "string"
}
```

### `UserCreate`

```json
{
  "username": "johndoe",
  "full_name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123",
  "confirm_password": "password123",
  "registration_number": "123456789",
  "date_of_birth": "1990-01-01",
  "batch": "2022",
  "avatar": "http://example.com/avatar.jpg",
  "following_people": ["janedoe"],
  "following_communities": ["community1", "community2"]
}
```

### `UserDisplay`

```json
{
  "full_name": "John Doe",
  "email": "john.doe@example.com",
  "username": "johndoe",
  "bio": "Software Engineer with 10 years of experience.",
  "tech_stack": ["Python", "FastAPI", "Docker"],
  "experience": "Worked at several major tech firms."
}
```

## Project Overview

### `ProjectDetails`

```json
{
  "username": "johndoe",
  "project_name": "Project Name",
  "project_description": "Project Description",
  "features": ["Feature 1", "Feature 2"],
  "tech_stack": ["Python", "FastAPI", "Docker"],
  "github_link": "example.com/github",
  "youtube_link": "example.com/youtube",
  "images": ["http://example.com/image1.jpg", "http://example.com/image2.jpg"],
  "associated_community": "community1"
}
```

## Blog Overview

### `BlogDetails`

```json
{
  "username": "johndoe",
  "blog_title": "Blog Title",
  "blog_date": "2022-01-01",
  "blog_description": "Blog Description",
  "associated_community": "community1"
}
```

## Community Overview

### `CommunityDetails`

```json
{
  "community_name": "Community Name",
  "projects": [
    {
      "project_name": "Project 1",
      "project_description": "Project Description",
      "features": ["Feature 1", "Feature 2"],
      "tech_stack": ["Python", "FastAPI", "Docker"],
      "github_link": "example.com/github",
      "youtube_link": "example.com/youtube",
      "images": [
        "http://example.com/image1.jpg",
        "http://example.com/image2.jpg"
      ]
    },
    {
      "project_name": "Project 2",
      "project_description": "Project Description",
      "features": ["Feature 1", "Feature 2"],
      "tech_stack": ["Python", "FastAPI", "Docker"],
      "github_link": "example.com/github",
      "youtube_link": "example.com/youtube",
      "images": [
        "http://example.com/image1.jpg",
        "http://example.com/image2.jpg"
      ]
    }
  ],
  "blogs": [
    {
      "blog_title": "Blog Title",
      "blog_date": "2022-01-01",
      "blog_description": "Blog Description"
    },
    {
      "blog_title": "Blog Title",
      "blog_date": "2022-01-01",
      "blog_description": "Blog Description"
    }
  ]
}
```
