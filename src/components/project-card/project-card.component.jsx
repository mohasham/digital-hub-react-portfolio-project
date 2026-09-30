import Icon from '../icon/icon.component';
import {
  BookingCover,
  MealCover,
  RoadmapCover,
  CommerceCover,
} from './project-covers';
import { usePointerPanel } from '../../hooks/use-reveal';
import './project-card.styles.scss';

const COVERS = {
  booking: BookingCover,
  meal: MealCover,
  roadmap: RoadmapCover,
  commerce: CommerceCover,
};

const ProjectCard = ({
  cover,
  year,
  title,
  summary,
  highlights = [],
  stack = [],
  repoUrl,
  liveUrl,
}) => {
  const Cover = COVERS[cover];
  const panelRef = usePointerPanel({ tilt: true, strength: 6 });

  return (
    <article className="project" ref={panelRef}>
      <div className="project__media">
        {Cover && <Cover />}
        <span className="project__year">{year}</span>
      </div>

      <div className="project__body">
        <h3 className="project__title">{title}</h3>
        <p className="project__summary">{summary}</p>

        {highlights.length > 0 && (
          <ul className="project__highlights">
            {highlights.map((item) => (
              <li className="project__highlight" key={item}>
                <Icon name="check" size="15px" className="project__highlight-icon" />
                {item}
              </li>
            ))}
          </ul>
        )}

        <ul className="project__stack">
          {stack.map((tech) => (
            <li className="project__tech" key={tech}>
              {tech}
            </li>
          ))}
        </ul>

        <div className="project__links">
          {liveUrl && (
            <a className="project__link project__link--primary" href={liveUrl} target="_blank" rel="noopener noreferrer">
              Open live site
              <Icon name="arrow_outward" size="16px" />
            </a>
          )}
          {repoUrl && (
            <a className="project__link" href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="code" size="16px" />
              Read the code
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
