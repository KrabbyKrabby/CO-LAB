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

  return (
    <div className={style.mainuserpage_container}>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} />
      <ProfileTab onTabSelect={setSelectedTab} selectedTab={selectedTab} username={username} setCurrentProject={setCurrentProject} />

      {selectedTab === 1 && (
        <div className={style.profile_card_container}>
          <ProfileCard title="Bio" ProfileInfo="Hello I am great" handleEdit={() => {}} />
          <ProfileCard title="Tech Stack" TechStack={TechStackInputWithProps} handleEdit={handleEdit} />
          <ProfileCard title="Experience" ProfileInfo="Hello I am great" handleEdit={() => {}} />
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
