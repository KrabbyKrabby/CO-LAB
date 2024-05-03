import React from 'react'
import styles from './CSS/ShowProjectDetails.module.css'
import VideoPlayer from './VideoPlayer';
import Navbar from './Navbar';
import ProfileTab from './ProfileTab';

const ShowProjectDetails = ({ formData, toggleEditing }) => {
  return (
    <div className={styles.SPDALlTogether}>
      <Navbar/>
      <ProfileTab/>
        <div className={styles.ShowProjectDetailsCard}>
        <div className={styles.detailItem}>
          <h4>Project Name:</h4>
          <p>{formData.projectName}</p>
        </div>
        <div className={styles.detailItem}>
          <h4>Project Description:</h4>
          <p>{formData.projectDescription}</p>
        </div>
        <div className={styles.detailItem}>
          <h4>Features:</h4>
          <p>{formData.projectFeatures}</p>
        </div>
        <div className={styles.detailItem}>
          <h4>Tech Stack:</h4>
          <p>{formData.projectTechStack}</p>
        </div>
        <div className={styles.detailItem}>
          <h4>GitHub Link:</h4>
          <a href={formData.projectGitHubLink} target="_blank" rel="noopener noreferrer">{formData.projectGitHubLink}</a>
        </div>
        {/* <div className={styles.detailItem}>
          <h4>Video Link:</h4>
          <p>{formData.projectVideoLink}</p>
        </div> */}
        <div className={styles.detailItem}>
          <h4>Video Link:</h4>
          {formData.projectVideoLink ? (
            <VideoPlayer videoLink={formData.projectVideoLink} />
          ) : (
            <p>No video link provided</p>
          )}
        </div>
        <div className={styles.detailItem}>
          <h4>Images:</h4>
          <div className={styles.imageContainer}>
            {formData.images.map((image, index) => (
              <img key={index} src={image.url} alt={image.name} />
            ))}
          </div>
        </div>
        <button className={styles.SPDEditButton} onClick={toggleEditing}>Edit</button>
      </div>
    </div>
    
  )
}

export default ShowProjectDetails
