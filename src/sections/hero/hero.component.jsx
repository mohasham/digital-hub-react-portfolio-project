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
            <span className="hero-section__title--highlight">Architectural Precision</span> in Full Stack Web Development
          </h1>
          <p className="hero-section__lead">
            Engineering digital experiences where structural integrity meets aesthetic elegance. I build scalable, high-performance web applications with a focus on clean code and user-centric vision.
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDNnDGfbs4NriYel7WmRiY4Peiq74-bTBxGvf0p657XnyMztXEbS03_RCtHpV6w2ygCjwYtL9sYTKC55Kuy70LHJtAkVGyAyRlyc_aWttBcWX4U5Pa0c8SjaqmoKSFSYXJu_-ieLo_XDCxsTIaOPSghrC4XdW0DcvBFXxdcG3PbwY3p8SGNOYZs1vMJOCcE0VkH77VxLguYQGkn7PqKEhLGtMRly5rFXR1rhPw8ZgNm-KhfWx-5-rpi02GQ4ZCmgtI6ixGcYZE6C8"
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
