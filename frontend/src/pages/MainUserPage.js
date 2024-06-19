import React, { useState } from 'react';
import style from './CSS/MainUserPage.module.css';
import Navbar from '../components/Navbar';
import ProfileTab from '../components/ProfileTab';
import BlogCard from '../components/BlogCard';
import ProjectCard from '../components/ProjectCard';
import ProfileCard from '../components/ProfileCard';
import TechStackInput from '../components/TechStackInput';
import { useNavigate } from "react-router-dom";
import { set } from 'react-hook-form';

const MainUserPage = ({ isLoggedIn, setIsLoggedIn, username, setUsername, projects, setCurrentProject, blogs, setCurrentBlog }) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedTechStack, setTechStack] = useState(['React', 'Node']);
  const [canEdit, setCanEdit] = useState(false);
  const navigate = useNavigate();

  const handleEdit = () => {
    setCanEdit(!canEdit);
  };

  const TechStackInputWithProps = () => (
    <TechStackInput selectedTechStack={selectedTechStack} setTechStack={setTechStack} canEdit={canEdit} />
  );

  const handleProjectClick = (project) => {
    setCurrentProject(project);
    navigate('/project_details');
  };

  const handleBlogClick = (blog) => {
    setCurrentBlog(blog);
    navigate('/blog_details');
  }

  const getProjects = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Get Projects API called");
        resolve({
          status: 200,
          data: [
            {
              id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              username: "johndoe",
              project_name: "Project 1",
              project_description: "Description of Project 1",
              features: ["Feature 1"],
              tech_stack: ["React"],
              github_link: "https://github.com/johndoe/project1",
              youtube_link: "https://youtube.com/video1",
              images: ["https://example.com/image1"],
              associated_community: "React"
            }
          ]
        });
      }, 500);
    });
  };

  const getProjectById = async (projectId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Get Project by ID API called with:", projectId);
        resolve({
          status: 200,
          data: {
            id: projectId,
            username: "johndoe",
            project_name: "Project 1",
            project_description: "Description of Project 1",
            features: ["Feature 1"],
            tech_stack: ["React"],
            github_link: "https://github.com/johndoe/project1",
            youtube_link: "https://youtube.com/video1",
            images: ["https://example.com/image1"],
            associated_community: "React"
          }
        });
      }, 500);
    });
  };

  const getBlogById = async (blogId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Get Blog by ID API called with:", blogId);
        resolve({
          status: 200,
          data: {
            id: blogId,
            username: "johndoe",
            blog_title: "Blog 1",
            blog_description: "Description of Blog 1",
            associated_community: "React"
          }
        });
      }, 500);
    });
  };

  return (
    <div className={style.mainuserpage_container}>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} />
      <ProfileTab onTabSelect={setSelectedTab} selectedTab={selectedTab} username={username} setCurrentProject={setCurrentProject} />

      {selectedTab === 1 && (
        <div className={style.profile_card_container}>
          <ProfileCard title="Bio" ProfileInfo="I am a student of Dhaka University persuing my Bachelor's in Computer Science and Engineering. I am a passionate software engineer working mainly with backend." handleEdit={() => {}} />
          <ProfileCard title="Tech Stack" TechStack={TechStackInputWithProps} handleEdit={handleEdit} />
          <ProfileCard title="Experience" ProfileInfo="2 years of Professional Experience in Software Engineering" handleEdit={() => {}} />
        </div>
      )}

      {selectedTab === 2 && (
        <div className={style.project_card_container}>
          {projects.filter(project => project.projectUsername === username).map((project, index) => (
            <ProjectCard
              key={index}
              title={project.projectName}
              description={project.projectDescription}
              onClick={() => handleProjectClick(project)} // Using the separate function
            />
          ))}
        </div>
      )}

      {selectedTab === 3 && (
        <div className={style.blog_card_container}>
          {blogs.filter(blog => blog.blogUsername === username).map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.blogTitle}
              description={blog.blogDescription}
              onClick={() => handleBlogClick(blog)}
              // You can add more props here if needed for BlogCard
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainUserPage;
