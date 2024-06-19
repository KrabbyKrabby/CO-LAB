import React from 'react';
import styles from './CSS/ProfileTab.module.css'; // Make sure to have this CSS file in the right path
import profilePicture from '../assets/profilepicture.png'; // Adjust path as needed
import starIcon from '../assets/star.png'; // Adjust path as needed
import peopleIcon from '../assets/twopeople.png'; // Adjust path as needed
import { useNavigate } from "react-router-dom";

const ProfileTab = ({ onTabSelect, selectedTab, username, setCurrentProject }) => {
  const navigate = useNavigate();

  // Separate function for handling Add Project button click
  const handleAddProjectClick = () => {
    console.log('Add Project clicked');
    const emptyProject = {
      projectUsername: username,
      projectCommunity: '',
      projectName: '',
      projectDescription: '',
      projectFeatures: '',
      projectGitHubLink: '',
      projectVideoLink: '',
      projectCommunity: '',
      images: [],
      techStack: []
    };
    setCurrentProject(emptyProject);
    navigate('/project_details');
  };

  // Separate function for handling Add Blog button click (assuming future implementation)
  const handleAddBlogClick = () => {
    navigate('/add_blog');
    // Placeholder for future navigation or functionality
    console.log('Add Blog clicked');
  };

  const createProject = async (projectData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Create Project API called with:", projectData);
        resolve({ status: 201, data: { message: "Project created successfully!" } });
      }, 500);
    });
  };

  return (
    <div className={styles.profile_tab}>
      <div className={styles.profile_info}>
        <img src={profilePicture} alt="Profile" className={styles.profile_picture} />
        <div className={styles.name_and_buttons}>
          <div className={styles.profile_tab_top}>
            <h1 className={styles.profile_name}>{username}</h1>
            <img src={starIcon} alt="Star" className={styles.icon} />
            <img src={peopleIcon} alt="People" className={styles.icon} />
            <button className={styles.add_button} onClick={handleAddProjectClick}>Add Project</button>
            <button className={styles.add_button} onClick={handleAddBlogClick}>Add Blog</button>
          </div>
          <div className={styles.profile_buttons}>
            <button className={`${styles.tab_button} ${selectedTab === 1 ? styles.selected : ''}`} onClick={() => onTabSelect(1)}>Profile Overview</button>
            <button className={`${styles.tab_button} ${selectedTab === 2 ? styles.selected : ''}`} onClick={() => onTabSelect(2)}>Projects</button>
            <button className={`${styles.tab_button} ${selectedTab === 3 ? styles.selected : ''}`} onClick={() => onTabSelect(3)}>Blogs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;