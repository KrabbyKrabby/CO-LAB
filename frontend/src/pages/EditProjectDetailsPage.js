import React, { useState } from 'react';
import ProfileTab from '../components/ProfileTab';
import EditProjectDetailsCard from '../components/EditProjectDetailsCard';
import styles from '../pages/CSS/EditProjectDetailsPage.module.css';
import Navbar from '../components/Navbar';
import DragDropImage from '../components/DragDropImage';

const EditProjectDetailsPage = ({
  formData,
  handleInputChange,
  toggleEditing,
  handleImagesChange,
  isLoggedIn,
  setIsLoggedIn,
  username,
  setUsername,
  handleTechStackChange,
  handleSave // Added the handleSave prop
}) => {
  const [selectedTechStack, setTechStack] = useState(formData.techStack);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleTechStackChange(selectedTechStack);
    toggleEditing();
  };

  const updateProject = async (projectId, projectData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Update Project API called with:", projectId, projectData);
        resolve({ status: 200, data: { message: "Project updated successfully!" } });
      }, 500);
    });
  };

  return (
    <div className={styles.EditProjectDetailsPage}>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} username={username} setUsername={setUsername} />
      <div className={styles.EPDPageheader}>
        <h1>Edit Project Details</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <EditProjectDetailsCard formData={formData} handleInputChange={handleInputChange} selectedTechStack={selectedTechStack} setTechStack={setTechStack} handleTechStackChange = {handleTechStackChange} />
        <DragDropImage onImagesChange={handleImagesChange} />
        <button type="submit" className={styles.ProjectDetailsButton}>SUBMIT</button>
      </form>
    </div>
  );
};

export default EditProjectDetailsPage;
