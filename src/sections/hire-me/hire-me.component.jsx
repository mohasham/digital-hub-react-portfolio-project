import Reveal from '../../components/reveal/reveal.component';
import Icon from '../../components/icon/icon.component';
import { useReveal, usePointerPanel } from '../../hooks/use-reveal';
import './hire-me.styles.scss';

const REASONS = [
  {
    icon: 'layers',
    title: 'One person, the whole slice',
    body: 'Schema, endpoint, guard, screen. Features do not stall waiting for a hand-off between layers.',
  },
  {
    icon: 'bolt',
    title: 'New tools stop being new quickly',
    body: 'FastAPI, Supabase, the Groq API — each of these went from unfamiliar to shipped inside one project.',
  },
  {
    icon: 'visibility',
    title: 'Edge cases early',
    body: 'Auth, validation and the awkward paths get designed with the feature, not patched in after review.',
  },
];

const HireMe = () => {
  const sectionRef = useReveal();
  const quoteRef = usePointerPanel();

  return (
    <section className="pitch" ref={sectionRef}>
      <div className="pitch__inner">
        <div className="pitch__grid">
          <div className="pitch__col">
            <Reveal as="p" className="pitch__eyebrow">
              Working together
            </Reveal>
            <Reveal as="h2" variant="mask" delay={60} className="pitch__title">
              What you get on day one
            </Reveal>

            <ul className="pitch__list">
              {REASONS.map((reason, index) => (
                <Reveal
                  as="li"
                  key={reason.title}
                  variant="left"
                  delay={140 + index * 100}
                  className="pitch__item"
                >
                  <span className="pitch__badge">
                    <Icon name={reason.icon} size="18px" />
                  </span>
                  <div>
                    <h3 className="pitch__item-title">{reason.title}</h3>
                    <p className="pitch__item-body">{reason.body}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal variant="right" delay={120} className="pitch__quote-col">
            <figure className="pitch__quote-card" ref={quoteRef}>
              <Icon name="format_quote" size="42px" className="pitch__quote-mark" />
              <blockquote className="pitch__quote">
                Making it work is the first half of the job. The second half is making sure
                it still works when someone else touches it, and that nobody can reach data
                that is not theirs.
              </blockquote>
              <figcaption className="pitch__author">
                <span className="pitch__avatar" aria-hidden="true">
                  MS
                </span>
                <span>
                  <span className="pitch__author-name">Mohammad Shamma</span>
                  <span className="pitch__author-role">Full-stack developer, Saida</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
