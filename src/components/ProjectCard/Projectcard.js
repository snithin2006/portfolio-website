import React from 'react';
import './Projectcard.css';

const ProjectCard = ({ image, name }) => {
  return (
    <div className="project-card">
      <img src={image} alt={name} className="project-cover" />
    </div>
  );
};

export default ProjectCard;