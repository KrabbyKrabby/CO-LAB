import React from 'react'
import ProfileTab from '../components/ProfileTab'
import EditProjectDetailsCard from '../components/EditProjectDetailsCard'
import styles from '../pages/CSS/EditProjectDetailsPage.module.css'
import Navbar from '../components/Navbar'
import DragDropImage from '../components/DragDropImage'

const EditProjectDetailsPage = ({formData, handleInputChange, toggleEditing, handleImagesChange}) => {
  
  const handleSignup = (event) => {
    event.preventDefault();

    console.log(formData);
    // Switch back to show mode
    toggleEditing();
    
  };
  
  
  return (
    <div className={styles.EditProjectDetailsPage} >
      <Navbar/>
        <div className={styles.EPDPageheader}>
          <h1>Edit Project Details</h1>
        </div>

      <form onSubmit={handleSignup}>
        <EditProjectDetailsCard formData={formData} handleInputChange={handleInputChange} />
        <DragDropImage onImagesChange={handleImagesChange} />
        <button type="submit" className={styles.ProjectDetailsButton}>SUBMIT</button>
      </form>
      
    </div>
  )
}

export default EditProjectDetailsPage
