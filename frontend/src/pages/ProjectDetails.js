import React, { useState, useEffect } from 'react';
import styles from './CSS/ProjectDetails.module.css';
import EditProjectDetailsPage from './EditProjectDetailsPage';
import ShowProjectDetails from './ShowProjectDetails';

const ProjectDetails = ({ isLoggedIn, setIsLoggedIn, username, setUsername, currentProject, updateProject }) => {
  const [editing, setEditing] = useState(false);

  const toggleEditing = () => {
    setEditing(!editing);
  };

  const [formData, setFormData] = useState(currentProject);

  useEffect(() => {
    if (currentProject) {
      setFormData(currentProject);
    }
  }, [currentProject]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImagesChange = (images) => {
    setFormData({ ...formData, images });
  };

  const handleTechStackChange = (newTechStack) => {
    setFormData({ ...formData, techStack: newTechStack });
  };

  const handleSave = () => {
    updateProject(formData);
    toggleEditing();
  };

  return (
    <div className={styles.projectDetails}>
      {editing ? (
        <EditProjectDetailsPage 
          formData={formData}
          handleInputChange={handleInputChange}
          handleImagesChange={handleImagesChange}
          toggleEditing={toggleEditing}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          username={username}
          setUsername={setUsername}
          handleTechStackChange={handleTechStackChange}
          handleSave={handleSave} // Pass handleSave to the EditProjectDetailsPage component
        />
      ) : (
        <ShowProjectDetails 
          formData={formData}
          toggleEditing={toggleEditing}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          username={username}
          setUsername={setUsername}
          handleSave={handleSave} // Pass handleSave to the ShowProjectDetails component
        />
      )}
    </div>
  );
};

export default ProjectDetails;
