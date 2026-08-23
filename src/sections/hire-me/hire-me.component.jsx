import React from 'react';
import './hire-me.styles.scss';
import Icon from '../../components/icon/icon.component';

const HireMe = () => {
  return (
    <section className="hire-me-pitch">
      <div className="hire-me-pitch__container">
        <div className="hire-me-pitch__grid">
          <div>
            <h2 className="hire-me-pitch__title">Why Work With Me?</h2>
            <ul className="hire-me-pitch__list">

              <li className="hire-me-pitch__item">
                <div className="hire-me-pitch__icon-badge">
                  <Icon name="check" className="material-symbols-outlined hire-me-pitch__check" />
                </div>
                <div>
                  <h4 className="hire-me-pitch__item-heading">End-to-End Ownership</h4>
                  <p className="hire-me-pitch__item-desc">I take features from database schema to deployed UI — design, build, secure, and ship.</p>
                </div>
              </li>

              <li className="hire-me-pitch__item">
                <div className="hire-me-pitch__icon-badge">
                  <Icon name="bolt" className="material-symbols-outlined hire-me-pitch__check" />
                </div>
                <div>
                  <h4 className="hire-me-pitch__item-heading">Fast to Learn</h4>
                  <p className="hire-me-pitch__item-desc">Quick to pick up new tools and frameworks — from AI APIs to whatever a project needs.</p>
                </div>
              </li>

              <li className="hire-me-pitch__item">
                <div className="hire-me-pitch__icon-badge">
                  <Icon name="visibility" className="material-symbols-outlined hire-me-pitch__check" />
                </div>
                <div>
                  <h4 className="hire-me-pitch__item-heading">Security-Minded</h4>
                  <p className="hire-me-pitch__item-desc">I think about auth, validation, and edge cases early — not as an afterthought.</p>
                </div>
              </li>

            </ul>
          </div>
          <div className="hire-me-pitch__testimonial-container">
            <div className="hire-me-pitch__card">
              <Icon name="format_quote" className="material-symbols-outlined hire-me-pitch__quote-mark" />
              <blockquote className="hire-me-pitch__quote">
                "I don't just make things work — I build them to be <span className="hire-me-pitch__quote--highlight">secure, scalable, and clean</span>, so they hold up long after launch."
              </blockquote>
              <div className="hire-me-pitch__author-box">
                <div className="hire-me-pitch__avatar"></div>
                <div>
                  <p className="hire-me-pitch__author-name">Mohammad Shamma</p>
                  <p className="hire-me-pitch__author-role">Full-Stack Web Developer</p>
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
