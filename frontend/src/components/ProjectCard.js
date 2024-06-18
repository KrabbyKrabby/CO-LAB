import React from 'react';
import style from './CSS/ProjectCard.module.css';
import { useNavigate } from "react-router-dom";


const ProjectCard = ({ title, description, imageUrl,onClick }) => {
  const navigate = useNavigate();
    return (
        <div className={style.project_card} onClick={onClick}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      );
}

export default ProjectCard;