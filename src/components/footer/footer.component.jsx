import React from 'react';
import './footer.styles.scss';

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="app-footer__container">
        <div className="app-footer__branding">
          <div className="app-footer__title">Mohammad Shamma</div>
          <p className="app-footer__copyright">© 2024 Mohammad Shamma. Built with precision and vision.</p>
        </div>
        <div className="app-footer__socials">
          <a className="app-footer__link" href="#">GitHub</a>
          <a className="app-footer__link" href="#">LinkedIn</a>
          <a className="app-footer__link" href="#">Twitter</a>
          <a className="app-footer__link" href="#">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;