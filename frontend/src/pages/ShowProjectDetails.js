import React from 'react';
import styles from './CSS/ShowProjectDetails.module.css';
import VideoPlayer from '../components/VideoPlayer';
import Navbar from '../components/Navbar';
import TechStackInput from '../components/TechStackInput';
import { useNavigate } from 'react-router-dom';

const ShowProjectDetails = ({ formData, toggleEditing, isLoggedIn, setIsLoggedIn, username, setUsername, handleSave }) => {
  const handleSubmit = () => {
    navigate('/profile');
    alert('Project details submitted!');
    handleSave();
  };
  const navigate = useNavigate();

  return (
    <div className={styles.SPDALlTogether}>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} />
      <div className={styles.ShowProjectDetailsCard}>
        {formData.projectUsername === username && (
          <button className={styles.submitButton} onClick={handleSubmit}>Save</button>
        )}
        <div className={styles.projectHTitle}>
          <div className={styles.detailItem}>
            <h6>Project Name:</h6>
            <p>{formData.projectName}</p>
          </div>
        </div>

        <div className={styles.detailItem}>
          <h3>Project Description:</h3>
          <p>{formData.projectDescription}</p>
        </div>

        <div className={styles.detailItem}>
          <h3>Features:</h3>
          <p>{formData.projectFeatures}</p>
        </div>

        <div className={styles.detailItem}>
          <h3>Tech Stack:</h3>
          <TechStackInput selectedTechStack={formData.techStack} setTechStack={null} canEdit={false} />
        </div>

        <div className={styles.detailItem}>
          <h3>GitHub Link:</h3>
          <a href={formData.projectGitHubLink} target="_blank" rel="noopener noreferrer">{formData.projectGitHubLink}</a>
        </div>

        <div className={styles.detailItem}>
          <h3>Images:</h3>
          <div className={styles.imageContainer}>
            {formData.images.map((image, index) => (
              <img key={index} src={image.url} alt={image.name} />
            ))}
          </div>
        </div>

        <div className={styles.detailItem}>
          <h3>Video Link:</h3>
          {formData.projectVideoLink ? (
            <VideoPlayer videoLink={formData.projectVideoLink} />
          ) : (
            <p>No video link provided</p>
          )}
        </div>

        <div className={styles.detailItem}>
          <h3>Community:</h3>
          <p>{formData.projectCommunity}</p>
        </div>

        <div className={styles.detailItem}>
          <h3>Project Owner:</h3>
          <p>{formData.projectUsername}</p>
        </div>

        {formData.projectUsername === username && (
          <button className={styles.SPDEditButton} onClick={toggleEditing}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default ShowProjectDetails;
