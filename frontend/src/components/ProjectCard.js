import React from 'react';
import style from './CSS/ProjectCard.module.css';

const ProjectCard = ({ title, description, imageUrl }) => {
    return (
        <div className={style.project_card}>
          <h3>{title}</h3>
          <p>{description}</p>
          <img src={imageUrl  || 'https://via.placeholder.com/150'} alt='project' className={style.project_image}/>
        </div>
      );
}

export default ProjectCard;