import React from 'react'
import ProfileTab from '../components/ProfileTab'
import EditProjectDetailsCard from '../components/EditProjectDetailsCard'
import styles from '../pages/CSS/EditProjectDetailsPage.module.css'
import Navbar from '../components/Navbar'
import DragDropImage from '../components/DragDropImage'

const EditProjectDetailsPage = () => {
  return (
    <div className={styles.EditProjectDetailsPage}>
      <Navbar/>
        <div className={styles.EPDPageheader}>
          <h1>Edit Project Details</h1>
        </div>

        <EditProjectDetailsCard/>
        
        <DragDropImage/>



        <button type="submit" className={styles.ProjectDetailsButton}>SUBMIT</button>
    </div>
  )
}

export default EditProjectDetailsPage
