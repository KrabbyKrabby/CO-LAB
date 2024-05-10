import React from 'react'
import styles from './CSS/ShowProjectDetails.module.css'
import VideoPlayer from './VideoPlayer';
import Navbar from './Navbar';
import ProfileTab from './ProfileTab';

const ShowProjectDetails = ({ formData, toggleEditing }) => {
  return (
    <div className={styles.SPDALlTogether}>
      <Navbar/>
      {/* <ProfileTab/> */}
        <div className={styles.ShowProjectDetailsCard}>
        <div className={styles.projectHTitle}>
          <div className={styles.detailItem}>
            {/* <h4>Project Name:</h4> */}
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
          <p>{formData.projectTechStack}</p>
        </div>
        <div className={styles.detailItem}>
          <h3>GitHub Link:</h3>
          <a href={formData.projectGitHubLink} target="_blank" rel="noopener noreferrer">{formData.projectGitHubLink}</a>
        </div>
        {/* <div className={styles.detailItem}>
          <h4>Video Link:</h4>
          <p>{formData.projectVideoLink}</p>
        </div> */}
        
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

        <button className={styles.SPDEditButton} onClick={toggleEditing}>Edit</button>
      </div>
    </div>
    
  )
}

export default ShowProjectDetails
