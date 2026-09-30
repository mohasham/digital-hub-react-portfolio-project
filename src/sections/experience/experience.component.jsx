import Reveal from '../../components/reveal/reveal.component';
import Icon from '../../components/icon/icon.component';
import { useReveal } from '../../hooks/use-reveal';
import './experience.styles.scss';

const TIMELINE = [
  {
    kind: 'work',
    icon: 'briefcase',
    role: 'Full-Stack Web Development Intern',
    org: 'The Digital Hub — UNRWA, Beirut',
    mode: 'Hybrid',
    period: 'Jun 2026 – Sep 2026',
    points: [
      'Built and shipped FitConnect and EatWise from requirements and UI design through database integration, testing and deployment.',
      'Worked in React, Next.js, Node.js, Express, FastAPI and MongoDB/PostgreSQL — REST APIs, authentication, validation and role-based access.',
      'Delivered inside a team using Git, pull requests, code reviews, Jira and Agile/Scrum.',
      'Integrated LLMs, RAG and AI APIs into product features.',
    ],
  },
  {
    kind: 'work',
    icon: 'terminal',
    role: 'Web Development Trainee',
    org: 'Open Technology Company, Saida',
    mode: 'Onsite',
    period: 'May 2022 – Jul 2022',
    points: [
      'Hands-on training in web fundamentals, building interactive interfaces with PHP, AJAX, jQuery and Bootstrap.',
      'Applied the theory to responsive, database-driven features throughout the program.',
    ],
  },
  {
    kind: 'study',
    icon: 'school',
    role: 'BSc in Business Computer',
    org: 'Lebanese University',
    mode: 'Saida',
    period: 'Sep 2019 – Dec 2022',
    points: ['Foundation in databases, systems and applied computing for business.'],
  },
];

const Experience = () => {
  const sectionRef = useReveal({ threshold: 0.08 });

  return (
    <section className="path" id="experience" ref={sectionRef}>
      <div className="path__inner">
        <header className="path__head">
          <Reveal as="p" className="path__eyebrow">
            The road so far
          </Reveal>
          <Reveal as="h2" variant="mask" delay={60} className="path__title">
            From coursework to shipping in a team
          </Reveal>
        </header>

        <ol className="path__list">
          {TIMELINE.map((entry, index) => (
            <Reveal
              as="li"
              key={entry.role}
              variant="left"
              delay={index * 110}
              className={`path__item path__item--${entry.kind}`}
            >
              <span className="path__node" aria-hidden="true">
                <Icon name={entry.icon} size="17px" />
              </span>

              <div className="path__card">
                <p className="path__period">{entry.period}</p>
                <h3 className="path__role">{entry.role}</h3>
                <p className="path__org">
                  {entry.org}
                  <span className="path__mode">{entry.mode}</span>
                </p>
                <ul className="path__points">
                  {entry.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* <Reveal className="path__languages" delay={120}>
          <Icon name="translate" size="18px" />
          <span>Arabic — native</span>
          <span className="path__divider" aria-hidden="true" />
          <span>English — professional proficiency</span>
        </Reveal> */}
      </div>
    </section>
  );
};

export default Experience;
