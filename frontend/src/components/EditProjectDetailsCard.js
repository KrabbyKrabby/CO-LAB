import React, { useState } from 'react';
import styles from '../components/CSS/EditProjectDetailsCard.module.css';
import VideoPlayer from './VideoPlayer';
import TechStackInput from './TechStackInput';

const communities = [
  'React',
  'Python',
  'Java',
];

const EditProjectDetailsCard = ({ formData, handleInputChange, toggleEditing, selectedTechStack, setTechStack }) => {
  return (
    <div className={styles.EditProjectDetailsCard}>
      <form className={styles.ProjectDetailsForm}>
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
          <TechStackInput selectedTechStack={formData.techStack} setTechStack={setTechStack} canEdit={true} />
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

        <h4>Select Community</h4>
        <select
          className={styles.EditProjectDetailsDropdown}
          name="projectCommunity"
          value={formData.projectCommunity}
          onChange={handleInputChange}
        >
          {communities.map((community, index) => (
            <option key={index} value={community}>
              {community}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default EditProjectDetailsCard;
