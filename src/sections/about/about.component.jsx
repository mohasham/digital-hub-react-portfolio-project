import React from 'react';
import './about.styles.scss';
import Icon from '../../components/icon/icon.component';

const About = () => {
  return (
    <section className="about-bento-section">
      <div className="about-bento-section__container">
        <div className="about-bento-section__grid">

          <div className="about-bento-section__card about-bento-section__card--featured">
            <div className="about-bento-section__icon-wrapper">
              <Icon name="architecture" className="material-symbols-outlined about-bento-section__icon" />
            </div>
            <h3 className="about-bento-section__card-title">Clean, Scalable Architecture</h3>
            <p className="about-bento-section__card-text">Structuring full-stack applications with clean architecture, SOLID principles, and clear separation of concerns so they stay maintainable as they grow.</p>
          </div>

          <div className="about-bento-section__card about-bento-section__card--standard">
            <Icon name="security" className="material-symbols-outlined about-bento-section__status-icon" />
            <div>
              <h3 className="about-bento-section__small-title">Auth & Security</h3>
              <p className="about-bento-section__muted-text">Building JWT authentication, role-based access control, and layered authorization down to the database with Row Level Security.</p>
            </div>
          </div>

          <div className="about-bento-section__card about-bento-section__card--surface">
            <Icon name="smart_toy" className="material-symbols-outlined about-bento-section__status-icon" />
            <h3 className="about-bento-section__small-title">AI Integration</h3>
            <p className="about-bento-section__muted-text">Integrating LLMs and AI APIs to turn user data into personalized, structured, real-world features.</p>
          </div>

          <div className="about-bento-section__card about-bento-section__card--tertiary">
            <Icon name="api" className="material-symbols-outlined about-bento-section__status-icon" />
            <h3 className="about-bento-section__small-title">RESTful APIs</h3>
            <p className="about-bento-section__text-opaque">Designing clean, validated, and documented REST endpoints for reliable client–server communication.</p>
          </div>

          <div className="about-bento-section__card about-bento-section__card--high">
            <Icon name="devices" className="material-symbols-outlined about-bento-section__status-icon" />
            <h3 className="about-bento-section__small-title">Responsive UIs</h3>
            <p className="about-bento-section__muted-text">Crafting fluid, mobile-first interfaces with React, Next.js, and SCSS that adapt seamlessly across devices.</p>
          </div>

          <div className="about-bento-section__card about-bento-section__card--wide">
            <div className="about-bento-section__icon-wrapper about-bento-section__icon-wrapper--accent">
              <Icon name="deployed_code" className="material-symbols-outlined about-bento-section__icon" />
            </div>
            <h3 className="about-bento-section__card-title about-bento-section__card-title--dark">MVC & Backend Foundations</h3>
            <p className="about-bento-section__muted-text">Comfortable with the MVC pattern and server-side fundamentals — from building an ASP.NET Core (.NET 6) app with the repository pattern, identity, and Stripe payments, to designing RESTful services in Node.js and Express.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
