import React from 'react';
import './technologies.styles.scss';

const Technologies = () => {
  return (
    <section className="tech-section" id="expertise">
      <div className="tech-section__container">
        <div className="tech-section__header">
          <h2 className="tech-section__title">Technical Ecosystem</h2>
          <p className="tech-section__subtitle">A comprehensive toolkit curated for building modern, scalable, and resilient digital products.</p>
        </div>
        <div className="tech-section__grid">
          
          <div className="tech-section__group-card">
            <div className="tech-section__icon-box">
              <span className="material-symbols-outlined tech-section__icon">terminal</span>
            </div>
            <h3 className="tech-section__group-title">Frontend</h3>
            <ul className="tech-section__list">
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">React & Next.js</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">TypeScript</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">Tailwind CSS</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">Framer Motion</span></li>
            </ul>
          </div>

          <div className="tech-section__group-card">
            <div className="tech-section__icon-box">
              <span className="material-symbols-outlined tech-section__icon">database</span>
            </div>
            <h3 className="tech-section__group-title">Backend</h3>
            <ul className="tech-section__list">
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">Node.js / Express</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">PostgreSQL / MongoDB</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">Prisma / Drizzle</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">Redis Caching</span></li>
            </ul>
          </div>

          <div className="tech-section__group-card">
            <div className="tech-section__icon-box">
              <span className="material-symbols-outlined tech-section__icon">construction</span>
            </div>
            <h3 className="tech-section__group-title">Tools</h3>
            <ul className="tech-section__list">
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">Docker & CI/CD</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">Git / GitHub</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">AWS / Vercel</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">Postman & Unit Testing</span></li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Technologies;