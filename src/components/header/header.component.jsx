import React, { useState, useEffect } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import './header.styles.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`top-nav-bar ${isScrolled ? 'top-nav-bar--scrolled' : ''}`}>
      <div className="top-nav-bar__brand">Mohammad Shamma</div>
      <div className="top-nav-bar__links">
        <a className="top-nav-bar__link top-nav-bar__link--active" href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>Hero</a>
        <a className="top-nav-bar__link" href="#expertise" onClick={(e) => handleNavClick(e, '#expertise')}>Expertise</a>
        <a className="top-nav-bar__link" href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
        <a className="top-nav-bar__link" href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
      </div>
      <Button
        as="a"
        href="#contact"
        onClick={(e) => handleNavClick(e, '#contact')}
        buttonType={BUTTON_TYPE_CLASSES.primary}
        className="top-nav-bar__cta"
      >
        Get in touch
      </Button>
    </nav>
  );
};

export default Header;
