import Reveal from '../../components/reveal/reveal.component';
import Icon from '../../components/icon/icon.component';
import { useReveal, usePointerPanel } from '../../hooks/use-reveal';
import './about.styles.scss';

const CARDS = [
  {
    key: 'architecture',
    icon: 'architecture',
    title: 'Structure that survives the second feature',
    body: 'Clean architecture, SOLID, and a clear separation of concerns — so adding to the codebase in month six costs about what it cost in week one.',
    size: 'lead',
  },
  {
    key: 'security',
    icon: 'security',
    title: 'Auth in layers',
    body: 'JWT sessions, role-based access, and Row Level Security at the database — so a missed check in the UI is not the only thing standing between a user and someone else\u2019s data.',
    size: 'tall',
  },
  {
    key: 'ai',
    icon: 'smart_toy',
    title: 'AI that stays grounded',
    body: 'Structured JSON output, validated server-side against real data before it reaches the user.',
    size: 'small',
  },
  {
    key: 'api',
    icon: 'api',
    title: 'APIs worth calling',
    body: 'Predictable REST endpoints, validated inputs, honest error responses.',
    size: 'small',
  },
  {
    key: 'ui',
    icon: 'devices',
    title: 'Interfaces that hold up on a phone',
    body: 'Mobile-first layouts in React and Next.js, tested on the small screen first rather than last.',
    size: 'small-end',
  },
  {
    key: 'delivery',
    icon: 'deployed_code',
    title: 'Shipped, not just written',
    body: 'Branches, pull requests, code review, CI, deployment — the parts of the job that happen after the feature works on my machine.',
    size: 'wide',
  },
];

const BentoCard = ({ card, index }) => {
  const ref = usePointerPanel();

  return (
    <Reveal
      variant="scale"
      delay={index * 70}
      className={`build__cell build__cell--${card.size}`}
    >
      <article className="build__card" ref={ref}>
        <span className="build__icon">
          <Icon name={card.icon} size="20px" />
        </span>
        <h3 className="build__card-title">{card.title}</h3>
        <p className="build__card-body">{card.body}</p>
      </article>
    </Reveal>
  );
};

const About = () => {
  const sectionRef = useReveal();

  return (
    <section className="build" ref={sectionRef}>
      <div className="build__inner">
        <header className="build__head">
          <Reveal as="p" className="build__eyebrow">
            How I work
          </Reveal>
          <Reveal as="h2" variant="mask" delay={60} className="build__title">
            Six habits that show up in every project
          </Reveal>
        </header>

        <div className="build__grid">
          {CARDS.map((card, index) => (
            <BentoCard card={card} index={index} key={card.key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
