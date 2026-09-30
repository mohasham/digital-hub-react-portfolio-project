import Reveal from '../../components/reveal/reveal.component';
import Icon from '../../components/icon/icon.component';
import { useReveal, usePointerPanel } from '../../hooks/use-reveal';
import './technologies.styles.scss';

const GROUPS = [
  {
    icon: 'terminal',
    title: 'Frontend',
    items: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Zustand',
      'TanStack Query',
      'HTML5 / CSS3',
      'SSR · CSR · SSG',
    ],
  },
  {
    icon: 'dns',
    title: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'Python',
      'FastAPI',
      'Django',
      'RESTful APIs',
      'Clean Architecture',
      'SOLID principles',
    ],
  },
  {
    icon: 'database',
    title: 'Data & security',
    items: [
      'PostgreSQL',
      'MySQL',
      'MongoDB / Mongoose',
      'Supabase',
      'JWT',
      'RBAC',
      'Row Level Security',
      'Secure cookies',
    ],
  },
  {
    icon: 'smart_toy',
    title: 'AI & delivery',
    items: [
      'LLMs & prompt engineering',
      'Groq / OpenAI APIs',
      'RAG',
      'Git & GitHub',
      'GitHub Actions / CI-CD',
      'Jest & Vitest',
      'Cloud deployment',
      'Core Web Vitals / SEO',
    ],
  },
];

const SkillGroup = ({ group, index }) => {
  const panelRef = usePointerPanel();

  return (
    <Reveal variant="up" delay={index * 90} className="skills__cell">
      <div className="skills__card" ref={panelRef}>
        <div className="skills__card-head">
          <span className="skills__icon">
            <Icon name={group.icon} size="19px" />
          </span>
          <h3 className="skills__group-title">{group.title}</h3>
        </div>
        <ul className="skills__list">
          {group.items.map((item) => (
            <li className="skills__item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
};

const Technologies = () => {
  const sectionRef = useReveal();

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="skills__inner">
        <header className="skills__head">
          <Reveal as="p" className="skills__eyebrow">
            Toolkit
          </Reveal>
          <Reveal as="h2" variant="mask" delay={60} className="skills__title">
            What I reach for, and why
          </Reveal>
          <Reveal as="p" delay={120} className="skills__intro">
            Grouped by the layer it lives in rather than by how well I know it — every
            item here has been used in something that shipped.
          </Reveal>
        </header>

        <div className="skills__grid">
          {GROUPS.map((group, index) => (
            <SkillGroup group={group} index={index} key={group.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
