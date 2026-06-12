import React from 'react';
import './about.styles.scss';

const About = () => {
  return (
    <section className="about-bento-section">
      <div className="about-bento-section__container">
        <div className="about-bento-section__grid">
          
          <div className="about-bento-section__card about-bento-section__card--featured">
            <div className="about-bento-section__icon-wrapper">
              <span className="material-symbols-outlined about-bento-section__icon">architecture</span>
            </div>
            <h3 className="about-bento-section__card-title">MVC Pattern Mastery</h3>
            <p className="about-bento-section__card-text">Structuring applications for longevity and scalability using time-tested architectural principles and separation of concerns.</p>
          </div>

          <div className="about-bento-section__card about-bento-section__card--standard">
            <span className="material-symbols-outlined about-bento-section__status-icon">security</span>
            <div>
              <h3 className="about-bento-section__small-title">Auth & Security</h3>
              <p className="about-bento-section__muted-text">Implementing robust OAuth2, JWT, and RBAC systems to safeguard sensitive user data.</p>
            </div>
          </div>

          <div className="about-bento-section__card about-bento-section__card--surface">
            <span className="material-symbols-outlined about-bento-section__status-icon">devices</span>
            <h3 className="about-bento-section__small-title">Responsive Logic</h3>
            <p className="about-bento-section__muted-text">Fluid layouts that adapt seamlessly from mobile-first to widescreen ultra-HD monitors.</p>
          </div>

          <div className="about-bento-section__card about-bento-section__card--tertiary">
            <span className="material-symbols-outlined about-bento-section__status-icon">api</span>
            <h3 className="about-bento-section__small-title">RESTful APIs</h3>
            <p className="about-bento-section__text-opaque">Crafting clean, documented, and high-throughput endpoints for seamless service integration.</p>
          </div>

          <div className="about-bento-section__card about-bento-section__card--high">
            <span className="material-symbols-outlined about-bento-section__status-icon">code</span>
            <h3 className="about-bento-section__small-title">Clean Code</h3>
            <p className="about-bento-section__muted-text">Adhering to SOLID principles and DRY patterns for maintainable and readable codebases.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;