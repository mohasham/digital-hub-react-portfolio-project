import React from 'react';
import './hire-me.styles.scss';

const HireMe = () => {
  return (
    <section className="hire-me-pitch">
      <div className="hire-me-pitch__container">
        <div className="hire-me-pitch__grid">
          <div>
            <h2 className="hire-me-pitch__title">Why Collaborate?</h2>
            <ul className="hire-me-pitch__list">
              
              <li className="hire-me-pitch__item">
                <div className="hire-me-pitch__icon-badge">
                  <span className="material-symbols-outlined hire-me-pitch__check">check</span>
                </div>
                <div>
                  <h4 className="hire-me-pitch__item-heading">Foundation of Excellence</h4>
                  <p className="hire-me-pitch__item-desc">Rigorous adherence to standard best practices and modern design patterns.</p>
                </div>
              </li>

              <li className="hire-me-pitch__item">
                <div className="hire-me-pitch__icon-badge">
                  <span className="material-symbols-outlined hire-me-pitch__check">bolt</span>
                </div>
                <div>
                  <h4 className="hire-me-pitch__item-heading">Agile Adaptation</h4>
                  <p className="hire-me-pitch__item-desc">Quick to learn and integrate new technologies to meet specific project needs.</p>
                </div>
              </li>

              <li className="hire-me-pitch__item">
                <div className="hire-me-pitch__icon-badge">
                  <span className="material-symbols-outlined hire-me-pitch__check">visibility</span>
                </div>
                <div>
                  <h4 className="hire-me-pitch__item-heading">Product Vision</h4>
                  <p className="hire-me-pitch__item-desc">Understanding the 'Why' behind every line of code to drive business value.</p>
                </div>
              </li>

            </ul>
          </div>
          <div className="hire-me-pitch__testimonial-container">
            <div className="hire-me-pitch__card">
              <span className="material-symbols-outlined hire-me-pitch__quote-mark">format_quote</span>
              <blockquote className="hire-me-pitch__quote">
                "My approach is a unique blend of <span className="hire-me-pitch__quote--highlight">precision and vision</span>. I don't just write code; I architect solutions that evolve with your users."
              </blockquote>
              <div className="hire-me-pitch__author-box">
                <div className="hire-me-pitch__avatar"></div>
                <div>
                  <p className="hire-me-pitch__author-name">Mohammad Shamma</p>
                  <p className="hire-me-pitch__author-role">Full Stack Developer</p>
                </div>
              </div>
            </div>
            <div className="hire-me-pitch__blur-decor"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;