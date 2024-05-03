import React from 'react';
import styles from '../components/CSS/EditProjectDetailsCard.module.css';
import VideoPlayer from './VideoPlayer';
import TechStackInput from './TechStackInput';

const EditProjectDetailsCard = ({formData, handleInputChange, toggleEditing}) => {

  return (
    <div className={styles.EditProjectDetailsCard}>
      <form className={styles.ProjectDetailsForm} >
        <h4>Project Name</h4>
        <input 
          className={styles.EditProjectDetailsInput}
          type="text" 
          id="ProjectName" 
          name="projectName"
          value={formData.projectName}
          onChange={handleInputChange}
        />

        <h4>Project Description</h4>
        <input 
          className={styles.EditProjectDetailsInput}
          type="text" 
          id="ProjectDescription" 
          name="projectDescription"
          value={formData.projectDescription}
          onChange={handleInputChange}
        />

        <h4>Features</h4>
        <input 
          className={styles.EditProjectDetailsInput}
          type="text" 
          id="ProjectFeatures" 
          name="projectFeatures"
          value={formData.projectFeatures}
          onChange={handleInputChange}
        />

        <h4>Tech Stack</h4>
        <div className={styles.TechStackContainer}>
        <TechStackInput />  
        </div>

        <h4>Project GitHub Link</h4>
        <input 
          className={styles.EditProjectDetailsInput}
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
        {/* <button type="submit" >Save</button> */}
      </form>
    </div>
  );
};

export default EditProjectDetailsCard;
