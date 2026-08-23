import React from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import './hero.styles.scss';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-section__gradient-mesh"></div>
      <div className="hero-section__container">
        <div className="hero-section__content">
          <div className="hero-section__badge">Available for opportunities</div>
          <h1 className="hero-section__title">
            Mohammad Shamma<br />
            <span className="hero-section__title--highlight">Full-Stack Developer</span> building secure, scalable web apps
          </h1>
          <p className="hero-section__lead">
            I design and ship end-to-end applications across the MERN and Next.js stacks — from
            secure REST APIs and role-based auth to responsive, AI-integrated interfaces.
            Clean architecture, real features, production-ready code.
          </p>
          <div className="hero-section__actions">
            <Button as="a" href="#contact" buttonType={BUTTON_TYPE_CLASSES.primary}>
              Contact Me
            </Button>

            <Button
              as="a"
              href="/Mohammad_Shamma_CV.pdf"
              download="Mohammad_Shamma_CV.pdf"
              buttonType={BUTTON_TYPE_CLASSES.secondary}
            >
              Download CV
            </Button>
          </div>
        </div>
        <div className="hero-section__visual-wrapper">
          <div className="hero-section__image-frame">
            <img
              className="hero-section__photo"
              alt="Mohammad Shamma"
              src="images/profile.jpeg"
            />
            <div className="hero-section__image-overlay"></div>
          </div>
          <div className="hero-section__decor hero-section__decor--bottom"></div>
          <div className="hero-section__decor hero-section__decor--top"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
