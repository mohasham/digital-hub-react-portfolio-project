import React from 'react';
import './technologies.styles.scss';
import Icon from '../../components/icon/icon.component';

const Technologies = () => {
  return (
    <section className="tech-section" id="expertise">
      <div className="tech-section__container">
        <div className="tech-section__header">
          <h2 className="tech-section__title">Technical Skills</h2>
          <p className="tech-section__subtitle">The stack I reach for to build modern, secure, and scalable web products end-to-end.</p>
        </div>
        <div className="tech-section__grid">

          <div className="tech-section__group-card">
            <div className="tech-section__icon-box">
              <Icon name="terminal" className="material-symbols-outlined tech-section__icon" />
            </div>
            <h3 className="tech-section__group-title">Frontend</h3>
            <ul className="tech-section__list">
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">React & Next.js</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">TypeScript (ES6+)</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">Zustand & TanStack Query</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">SCSS / Tailwind CSS</span></li>
            </ul>
          </div>

          <div className="tech-section__group-card">
            <div className="tech-section__icon-box">
              <Icon name="dns" className="material-symbols-outlined tech-section__icon" />
            </div>
            <h3 className="tech-section__group-title">Backend</h3>
            <ul className="tech-section__list">
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">Node.js / Express</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">Python / FastAPI / Django</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">RESTful APIs</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">Clean Architecture / SOLID</span></li>
            </ul>
          </div>

          <div className="tech-section__group-card">
            <div className="tech-section__icon-box">
              <Icon name="database" className="material-symbols-outlined tech-section__icon" />
            </div>
            <h3 className="tech-section__group-title">Data & Security</h3>
            <ul className="tech-section__list">
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">MongoDB / Mongoose</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">MySQL / SQL / NoSQL</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">JWT / RBAC / Secure Cookies</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">Auth & Authorization</span></li>
            </ul>
          </div>

          <div className="tech-section__group-card">
            <div className="tech-section__icon-box">
              <Icon name="smart_toy" className="material-symbols-outlined tech-section__icon" />
            </div>
            <h3 className="tech-section__group-title">AI & Delivery</h3>
            <ul className="tech-section__list">
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">LLMs & Prompt Engineering</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">AI API Integration</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">Git / GitHub Actions / CI/CD</span></li>
              <li className="tech-section__item"><span className="tech-section__bullet"></span><span className="tech-section__name">Jest / Vitest Testing</span></li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Technologies;
