import React, { useState } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../../components/button/button.component';
import './contact.styles.scss';
import Icon from '../../components/icon/icon.component';

const Contact = () => {
  const [inputs, setInputs] = useState({ name: '', email: '', subject: '', message: '' });

  const handleFormChange = (e, key) => {
    setInputs({ ...inputs, [key]: e.target.value });
  };

  const handleMessageDispatch = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact-wrapper-block" id="contact">
      <div className="contact-wrapper-block__container">
        <div className="contact-wrapper-block__bento-box">
          <div className="contact-wrapper-block__ambient-decor"></div>
          <div className="contact-wrapper-block__info-side">
            <h2 className="contact-wrapper-block__heading">Let's build something <span className="contact-wrapper-block__heading--highlight">visionary</span>.</h2>
            <p className="contact-wrapper-block__lead">Open for freelance projects, collaborations, or full-time opportunities. Let's discuss your next breakthrough.</p>
            <div className="contact-wrapper-block__channels">

              <div className="contact-wrapper-block__channel-item">
                <div className="contact-wrapper-block__icon-plate">
                  <Icon name="mail" className="material-symbols-outlined contact-wrapper-block__icon" />
                </div>
                <div>
                  <p className="contact-wrapper-block__label">Email me</p>
                  <p className="contact-wrapper-block__value">mohammadshamma298@gmail.com</p>
                </div>
              </div>

              <div className="contact-wrapper-block__channel-item">
                <div className="contact-wrapper-block__icon-plate">
                  <Icon name="call" className="material-symbols-outlined contact-wrapper-block__icon" />
                </div>
                <div>
                  <p className="contact-wrapper-block__label">Call me</p>
                  <p className="contact-wrapper-block__value">+961 71 652 129</p>
                </div>
              </div>

              <div className="contact-wrapper-block__channel-item">
                <div className="contact-wrapper-block__icon-plate">
                  <Icon name="location_on" className="material-symbols-outlined contact-wrapper-block__icon" />
                </div>
                <div>
                  <p className="contact-wrapper-block__label">Location</p>
                  <p className="contact-wrapper-block__value" data-location="Saida, Lebanon">Saida, Lebanon</p>
                </div>
              </div>

            </div>
          </div>
          <form className="contact-wrapper-block__form" onSubmit={handleMessageDispatch}>
            <div className="contact-wrapper-block__form-row">
              <div className="contact-wrapper-block__form-field">
                <label className="contact-wrapper-block__field-label">Name</label>
                <input className="contact-wrapper-block__input" type="text" value={inputs.name} onChange={(e) => handleFormChange(e, 'name')} />
              </div>
              <div className="contact-wrapper-block__form-field">
                <label className="contact-wrapper-block__field-label">Email</label>
                <input className="contact-wrapper-block__input" type="email" value={inputs.email} onChange={(e) => handleFormChange(e, 'email')} />
              </div>
            </div>
            <div className="contact-wrapper-block__form-field">
              <label className="contact-wrapper-block__field-label">Subject</label>
              <input className="contact-wrapper-block__input" type="text" value={inputs.subject} onChange={(e) => handleFormChange(e, 'subject')} />
            </div>
            <div className="contact-wrapper-block__form-field">
              <label className="contact-wrapper-block__field-label">Message</label>
              <textarea className="contact-wrapper-block__textarea" rows="4" value={inputs.message} onChange={(e) => handleFormChange(e, 'message')}></textarea>
            </div>
            <Button
              as="button"
              type="submit"
              buttonType={BUTTON_TYPE_CLASSES.submit}
              className="contact-wrapper-block__submit-btn"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
