import React from 'react'
import styles from './CSS/CommunityDetailsPage.module.css'
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';


const CommunityDetails = () => {
  return (
    <div className={styles.MainContainer}>
        <Navbar/>
        <h3 className={styles.community_name}>Community Name</h3>
        <img className={styles.community_image} src="https://via.placeholder.com/150" alt="Community Image"/>
        <h3 className={styles.text}>Projects</h3>
        <div className={styles.community_card_container}>
            <ProjectCard title="Project 1" description="This is a project description"/>
            <ProjectCard title="Project 2" description="This is a project description"/>
            <ProjectCard title="Project 3" description="This is a project description"/>
            <ProjectCard title="Project 4" description="This is a project description"/>
            <ProjectCard title="Project 3" description="This is a project description"/>
            <ProjectCard title="Project 4" description="This is a project description"/>
            <ProjectCard title="Project 1" description="This is a project description"/>
        </div>

      <h3 className={styles.text}>Blogs</h3>
        <div className={styles.community_card_container}>
            <BlogCard title="Blog Title 1" description="This is a blog description"/>
            <BlogCard title="Blog Title 2" description="This is a blog description"/>
            <BlogCard title="Blog Title 3" description="This is a blog description"/>
            <BlogCard title="Blog Title 4" description="This is a blog description"/>
            <BlogCard title="Blog Title 3" description="This is a blog description"/>
            <BlogCard title="Blog Title 4" description="This is a blog description"/>
            
            
        </div>
    </div>
  );
}

export default CommunityDetails