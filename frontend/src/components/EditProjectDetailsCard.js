import React, { useState } from 'react';
import styles from '../components/CSS/EditProjectDetailsCard.module.css';
import VideoPlayer from './VideoPlayer';

const EditProjectDetailsCard = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    projectFeatures: '',
    projectTechStack: '',
    projectGitHubLink: '',
    projectVideoLink: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = (event) => {
    event.preventDefault();
    // Here you can handle the form data, for example:
    console.log(formData);
  };

  return (
    <div className={styles.EditProjectDetailsCard}>
      <form className={styles.ProjectDetailsForm} onSubmit={handleSignup}>
        <h4>Project Name</h4>
        <input 
          type="text" 
          id="ProjectName" 
          name="projectName"
          value={formData.projectName}
          onChange={handleInputChange}
        />

        <h4>Project Description</h4>
        <input 
          type="text" 
          id="ProjectDescription" 
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleInputChange}
        />

        <h4>Features</h4>
        <input 
          type="text" 
          id="ProjectFeatures" 
          name="projectFeatures"
          value={formData.projectFeatures}
          onChange={handleInputChange}
        />

        <h4>Tech Stack</h4>
        <input 
          type="text" 
          id="ProjectTechStack" 
          name="projectTechStack"
          value={formData.projectTechStack}
          onChange={handleInputChange}
        />

        <h4>Project GitHub Link</h4>
        <input 
          type="text" 
          id="ProjectGitHubLink" 
          name="projectGitHubLink"
          value={formData.projectGitHubLink}
          onChange={handleInputChange}
        />

        <h4>Project Video Link</h4>
        <input 
          type="url" 
          id="ProjectVideoLink" 
          name="projectVideoLink"
          placeholder="Enter Youtube Video Link" 
          className={styles.VideoLinkInput} 
          value={formData.projectVideoLink}
          onChange={handleInputChange}
        />
        <VideoPlayer videoLink={formData.projectVideoLink} />
        
      </form>
    </div>
  );
};

export default EditProjectDetailsCard;
