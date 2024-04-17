import React from 'react'
import styles from '../components/CSS/EditProjectDetailsCard.module.css';


const EditProjectDetailsCard = () => {

    const handleSignup = (event) => {
        event.preventDefault();
        
      };

  return (
    <div className={styles.EditProjectDetailsCard}>
      <form className={styles.ProjectDetailsForm} onSubmit={handleSignup}>
        <h4>Project Name</h4>
        <input type="text" id="ProjectName" />

        <h4>Project Description</h4>
        <input type="text" id="ProjectDescription" />

        <h4>Features</h4>
        <input type="text" id="ProjectFeatures" />

        <h4>Tech Stack</h4>
        <input type="text" id="ProjectTechStack" />
        
      </form>
    </div>
  )
}

export default EditProjectDetailsCard
