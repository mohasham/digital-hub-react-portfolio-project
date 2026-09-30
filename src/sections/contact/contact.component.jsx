import { useState } from 'react';
import Button from '../../components/button/button.component';
import { BUTTON_TYPE_CLASSES } from '../../components/button/button.types';
import Reveal from '../../components/reveal/reveal.component';
import Icon from '../../components/icon/icon.component';
import { useReveal, usePointerPanel } from '../../hooks/use-reveal';
import './contact.styles.scss';

const EMAIL = 'mohammadshamma298@gmail.com';

const CHANNELS = [
  { icon: 'mail', label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: 'call', label: 'Phone', value: '+961 71 652 129', href: 'tel:+96171652129' },
  { icon: 'location_on', label: 'Based in', value: 'Saida, Lebanon · open to remote' },
];

const FIELDS = [
  { key: 'name', label: 'Your name', type: 'text', autoComplete: 'name' },
  { key: 'email', label: 'Your email', type: 'email', autoComplete: 'email' },
  { key: 'subject', label: 'Subject', type: 'text', full: true },
];

const Contact = () => {
  const sectionRef = useReveal();
  const panelRef = usePointerPanel();

  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [copied, setCopied] = useState(false);

  const update = (key) => (event) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Add a name so I know who I am replying to.';
    if (!/^\S+@\S+\.\S+$/.test(values.email))
      nextErrors.email = 'That email address does not look complete.';
    if (values.message.trim().length < 10)
      nextErrors.message = 'A sentence or two about the project helps.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const subject = values.subject.trim() || `Message from ${values.name.trim()}`;
    const body = `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact__inner">
        <Reveal variant="scale" className="contact__panel-wrap">
          <div className="contact__panel" ref={panelRef}>
            <div className="contact__info">
              <p className="contact__eyebrow">Next step</p>
              <h2 className="contact__title">
                Tell me what you are building.
              </h2>
              <p className="contact__lead">
                Open to full-time roles, freelance work, and collaborations. I read
                everything and reply within a day or two.
              </p>

              <ul className="contact__channels">
                {CHANNELS.map((channel) => {
                  const Row = channel.href ? 'a' : 'div';
                  return (
                    <li key={channel.label}>
                      <Row
                        className="contact__channel"
                        {...(channel.href ? { href: channel.href } : {})}
                      >
                        <span className="contact__channel-icon">
                          <Icon name={channel.icon} size="18px" />
                        </span>
                        <span>
                          <span className="contact__channel-label">{channel.label}</span>
                          <span className="contact__channel-value">{channel.value}</span>
                        </span>
                      </Row>
                    </li>
                  );
                })}
              </ul>

              <button type="button" className="contact__copy" onClick={copyEmail}>
                <Icon name={copied ? 'check' : 'content_copy'} size="16px" />
                {copied ? 'Email address copied' : 'Copy email address'}
              </button>
            </div>

            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              {FIELDS.map((field) => (
                <div
                  className={`contact__field ${field.full ? 'contact__field--full' : ''}`}
                  key={field.key}
                >
                  <input
                    id={`contact-${field.key}`}
                    className={`contact__input ${errors[field.key] ? 'contact__input--error' : ''}`}
                    type={field.type}
                    value={values[field.key]}
                    onChange={update(field.key)}
                    autoComplete={field.autoComplete}
                    placeholder=" "
                  />
                  <label className="contact__label" htmlFor={`contact-${field.key}`}>
                    {field.label}
                  </label>
                  {errors[field.key] && (
                    <p className="contact__error">{errors[field.key]}</p>
                  )}
                </div>
              ))}

              <div className="contact__field contact__field--full">
                <textarea
                  id="contact-message"
                  className={`contact__input contact__input--area ${
                    errors.message ? 'contact__input--error' : ''
                  }`}
                  rows="5"
                  value={values.message}
                  onChange={update('message')}
                  placeholder=" "
                />
                <label className="contact__label" htmlFor="contact-message">
                  What are you working on?
                </label>
                {errors.message && <p className="contact__error">{errors.message}</p>}
              </div>

              <Button
                as="button"
                type="submit"
                buttonType={BUTTON_TYPE_CLASSES.primary}
                className="contact__submit"
              >
                Send message
              </Button>

              <p className="contact__note">
                This opens the message in your email app, already filled in.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
