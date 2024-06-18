import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './CSS/CommunityDetailsPage.module.css';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';
import favoriteOn from '../assets/favoriteOn.png';
import favoriteOff from '../assets/favoriteOff.png';

const CommunityDetails = ({ isLoggedIn, setIsLoggedIn, username, setUsername, projects, setCurrentProject, blogs, setCurrentBlog }) => {
  const location = useLocation();
  const { communityName, communityImageURL } = location.state || { communityName: 'Default Community', communityImageURL: 'https://via.placeholder.com/150' };
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleProjectClick = (project) => {
    setCurrentProject(project);
    navigate('/project_details');
  };

  const handleBlogClick = (blog) => {
    setCurrentBlog(blog);
    navigate('/blog_details');
  }

  return (
    <div className={styles.MainContainer}>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} />

      <div className={styles.header}>
        <h3 className={styles.community_name}>{communityName} Community</h3>
        <img
          src={isFavorite ? favoriteOn : favoriteOff}
          alt="Favorite Icon"
          className={styles.favoriteIcon}
          onClick={toggleFavorite}
        />
      </div>
      <img className={styles.community_image} src={communityImageURL} alt="Community Image" />
      
      <h3 className={styles.text}>Projects</h3>
      <div className={styles.community_card_container}>
        {projects.filter(project => project.projectCommunity === communityName).map((project, index) => (
          <ProjectCard
            key={index}
            title={project.projectName}
            description={project.projectDescription}
            onClick={() => handleProjectClick(project)} // Using the separate function
          />
        ))}
      </div>
      
      <h3 className={styles.text}>Blogs</h3>
      <div className={styles.community_card_container}>
        {blogs.filter(blog => blog.blogCommunity === communityName).map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.blogTitle}
            description={blog.blogDescription}
            onClick={() => handleBlogClick(blog)}
            // You can add more props here if needed for BlogCard
          />
        ))}
      </div>
    </div>
  );
};

export default CommunityDetails;
