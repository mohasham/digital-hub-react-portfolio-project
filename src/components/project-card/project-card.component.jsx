import React from 'react';
import './project-card.styles.scss';

const ProjectCard = ({ imgUrl, imgAlt, dataAlt, tags, title, description }) => {
  return (
    <div className="project-card">
      <div className="project-card__media-wrapper">
        <img 
          className="project-card__img" 
          src={imgUrl} 
          alt={imgAlt} 
          data-alt={dataAlt}
        />
        <div className="project-card__overlay">
          <span className="project-card__overlay-btn">View Case Study</span>
        </div>
      </div>
      <div className="project-card__tags">
        {tags.map((tag, index) => (
          <span key={index} className="project-card__tag">{tag}</span>
        ))}
      </div>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>
    </div>
  );
};

export default ProjectCard;