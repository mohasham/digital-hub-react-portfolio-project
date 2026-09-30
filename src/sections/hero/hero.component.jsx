import { useEffect, useState } from 'react';
import Button from '../../components/button/button.component';
import { BUTTON_TYPE_CLASSES } from '../../components/button/button.types';
import Icon from '../../components/icon/icon.component';
import Marquee from '../../components/marquee/marquee.component';
import { useCountUp } from '../../hooks/use-reveal';
import './hero.styles.scss';

const FOCUS_LINES = [
  'secure REST APIs',
  'role-based access control',
  'AI-powered features',
  'clean, scalable architecture',
];

const STACK_TICKER = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Express',
  'FastAPI',
  'PostgreSQL',
  'MongoDB',
  'Supabase',
  'JWT / RBAC',
  'Groq API',
  'GitHub Actions',
  'Vitest',
  'Tailwind',
  'Zustand',
  'TanStack Query',
];

const Stat = ({ to, suffix, label }) => {
  const [ref, value] = useCountUp(to);
  return (
    <div className="hero__stat" ref={ref}>
      <span className="hero__stat-value">
        {value}
        {suffix}
      </span>
      <span className="hero__stat-label">{label}</span>
    </div>
  );
};

const Hero = () => {
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(
      () => setFocusIndex((i) => (i + 1) % FOCUS_LINES.length),
      2800
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__status" style={{ '--step': 0 }}>
            <span className="hero__pulse" aria-hidden="true" />
            Open to full-time and freelance work
          </p>

          <h1 className="hero__title">
            <span className="hero__name" style={{ '--step': 1 }}>
              <span className="hero__line-inner">Mohammad Shamma</span>
            </span>
            <span className="hero__line" style={{ '--step': 2 }}>
              <span className="hero__line-inner">I build the parts</span>
            </span>
            <span className="hero__line hero__line--outline" style={{ '--step': 3 }}>
              <span className="hero__line-inner">users never see.</span>
            </span>
          </h1>

          <p className="hero__lead" style={{ '--step': 4 }}>
            Full-stack developer in Saida, Lebanon. I ship end-to-end products across the
            MERN and Next.js stacks — the database schema, the API, the auth layer, and the
            interface on top of it.
          </p>

          <p className="hero__focus" style={{ '--step': 5 }} aria-live="polite">
            <span className="hero__focus-prefix">Currently deep in</span>
            <span className="hero__focus-rotator">
              {FOCUS_LINES.map((line, index) => (
                <span
                  key={line}
                  className={`hero__focus-item ${
                    index === focusIndex ? 'hero__focus-item--on' : ''
                  }`}
                >
                  {line}
                </span>
              ))}
            </span>
          </p>

          <div className="hero__actions" style={{ '--step': 6 }}>
            <Button as="a" href="#work" buttonType={BUTTON_TYPE_CLASSES.primary}>
              See the work
            </Button>
            <Button
              as="a"
              href="/Mohammad_Shamma_CV.pdf"
              download="Mohammad_Shamma_CV.pdf"
              buttonType={BUTTON_TYPE_CLASSES.secondary}
            >
              <Icon name="download" size="18px" />
              Download CV
            </Button>
          </div>

          <div className="hero__stats" style={{ '--step': 7 }}>
            <Stat to={3} suffix="" label="Full-stack products shipped" />
            <Stat to={4} suffix=" mo" label="Team internship at UNRWA Digital Hub" />
            <Stat to={12} suffix="+" label="Technologies used in production" />
          </div>
        </div>

        <div className="hero__visual" style={{ '--step': 4 }}>
          <div className="hero__portrait">
            <img
              className="hero__photo"
              src="/images/profile.jpeg"
              alt="Mohammad Shamma"
              width="520"
              height="620"
            />
            <span className="hero__portrait-ring" aria-hidden="true" />
          </div>

          <div className="hero__chip hero__chip--one">
            <Icon name="security" size="15px" />
            RLS + JWT
          </div>
          <div className="hero__chip hero__chip--two">
            <Icon name="smart_toy" size="15px" />
            Groq / Llama 3.3
          </div>
          <div className="hero__chip hero__chip--three">
            <Icon name="database" size="15px" />
            Postgres · Mongo
          </div>
        </div>
      </div>

      <div className="hero__ticker" style={{ '--step': 8 }}>
        <Marquee items={STACK_TICKER} speed={46} />
      </div>
    </section>
  );
};

export default Hero;
