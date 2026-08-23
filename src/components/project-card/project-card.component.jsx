import React from 'react';
import './project-card.styles.scss';
import Icon from '../icon/icon.component';

const ProjectCard = ({ imgUrl, imgAlt, dataAlt, tags, title, description, repoUrl }) => {
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
          {repoUrl && (
            <a
              className="project-card__overlay-btn"
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
      <div className="project-card__tags">
        {tags.map((tag, index) => (
          <span key={index} className="project-card__tag">{tag}</span>
        ))}
      </div>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>
      {repoUrl && (
        <a
          className="project-card__repo-link"
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="code" className="material-symbols-outlined" />
          View Code
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
