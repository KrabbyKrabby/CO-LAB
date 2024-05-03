import React, {useState} from 'react';
import styles from './CSS/ProjectDetails.module.css';
import EditProjectDetailsPage from './EditProjectDetailsPage';
import ShowProjectDetails from '../components/ShowProjectDetails';


const ProjectDetails = () => {

  const [editing, setEditing] = useState(false);

  const toggleEditing = () => {
    setEditing(!editing);
  };

  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    projectFeatures: '',
    projectTechStack: '',
    projectGitHubLink: '',
    projectVideoLink: '',
    images: [] // Add images state
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImagesChange = (images) => {
    setFormData({ ...formData, images }); // Update images state
  };


  return (
    <div className={styles.projectDetails}>
      {editing ? (
        <EditProjectDetailsPage 
          formData={formData}
          handleInputChange={handleInputChange}
          handleImagesChange={handleImagesChange}
          toggleEditing={toggleEditing}
        />
      ) : (
        <ShowProjectDetails 
          formData={formData}
          toggleEditing={toggleEditing}
        />
      )}      
    </div>
  );
};

export default ProjectDetails;
