import ProjectCard from '../../components/project-card/project-card.component';
import Reveal from '../../components/reveal/reveal.component';
import Icon from '../../components/icon/icon.component';
import { useReveal } from '../../hooks/use-reveal';
import './projects.styles.scss';

const PROJECTS = [
  {
    cover: 'booking',
    year: 'Jul 2026',
    title: 'FitConnect',
    summary:
      'A booking platform where clients find a personal trainer, reserve a session, and pay for it end to end.',
    highlights: [
      'Two-layer authorization: route guards in the app, Row Level Security in the database',
      'Real-time slot validation with reschedule limits and refund eligibility rules',
      'Separate client and admin dashboards driven by role',
    ],
    stack: ['Next.js', 'PostgreSQL', 'Supabase', 'RLS'],
    repoUrl: 'https://github.com/mohasham/Personal-Trainers-Scheduling-System',
  },
  {
    cover: 'meal',
    year: 'Jul 2026',
    title: 'EatWise',
    summary:
      'A meal planner that turns a health profile — goals, allergies, body metrics — into a personalized daily plan.',
    highlights: [
      'Groq API (Llama 3.3 70B) generates plans from each profile',
      'BMR-based calorie targets over a normalized MongoDB schema',
      'Admin analytics built on aggregation pipelines, behind JWT role checks',
    ],
    stack: ['MERN', 'TypeScript', 'Groq API', 'MongoDB'],
    liveUrl: 'https://eatwise-mealplanner.vercel.app/',
    repoUrl: 'https://github.com/mohasham/DH-EatWise',
  },
  {
    cover: 'roadmap',
    year: 'Sep 2026',
    title: 'AI Career Navigator',
    summary:
      'A career platform that scores your technical skills, matches them to real roles, and writes the roadmap to close the gap.',
    highlights: [
      'Deterministic weighted-scoring algorithm matches skills against role requirements',
      'Hallucination-resistant pipeline: JSON-mode output validated server-side against the assessment',
      'Google OAuth and Row Level Security keep each user\u2019s data isolated',
    ],
    stack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Groq API'],
    repoUrl: 'https://github.com/mohasham/DH_AI_Career_Navigator',
  },
  {
    cover: 'commerce',
    year: '2025',
    title: 'Rivo',
    summary:
      'A storefront and stock room in one: customers browse and order, staff manage products and fulfilment.',
    highlights: [
      'REST API with JWT auth and role-based access across both interfaces',
      'Cart, checkout and order processing wired to live inventory counts',
    ],
    stack: ['React', 'Node.js', 'Express', 'Redux Toolkit'],
    repoUrl: 'https://github.com/mohasham/react-project-stock-management',
  },
];

const Projects = () => {
  const sectionRef = useReveal();

  return (
    <section className="work" id="work" ref={sectionRef}>
      <div className="work__inner">
        <header className="work__head">
          <div>
            <Reveal as="p" className="work__eyebrow">
              Selected work
            </Reveal>
            <Reveal as="h2" variant="mask" delay={60} className="work__title">
              Four products, built start to finish
            </Reveal>
            <Reveal as="p" delay={120} className="work__intro">
              Each one began as a requirement and ended as a deployed app — schema, API,
              auth, interface, and the decisions in between.
            </Reveal>
          </div>

          <Reveal delay={160}>
            <a
              className="work__all"
              href="https://github.com/mohasham"
              target="_blank"
              rel="noopener noreferrer"
            >
              Everything on GitHub
              <Icon name="arrow_outward" size="17px" />
            </a>
          </Reveal>
        </header>

        <div className="work__grid">
          {PROJECTS.map((project, index) => (
            <Reveal
              key={project.title}
              variant="scale"
              delay={index * 90}
              className="work__cell"
            >
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
