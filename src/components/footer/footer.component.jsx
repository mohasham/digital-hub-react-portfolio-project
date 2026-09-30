import Icon from '../icon/icon.component';
import './footer.styles.scss';

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/mohasham' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammad-shamma/' },
  { label: 'Email', href: 'mailto:mohammadshamma298@gmail.com' },
  { label: 'CV (PDF)', href: '/Mohammad_Shamma_CV.pdf' },
];

const Footer = () => {
  const backToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-foot">
      <div className="site-foot__inner">
        <div className="site-foot__brand">
          <p className="site-foot__name">Mohammad Shamma</p>
          <p className="site-foot__line">
            Full-stack developer in Saida, Lebanon. Building things that hold up.
          </p>
        </div>

        <nav className="site-foot__links" aria-label="Elsewhere">
          {LINKS.map((link) => (
            <a
              className="site-foot__link"
              key={link.label}
              href={link.href}
              {...(link.href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a className="site-foot__top" href="#hero" onClick={backToTop}>
          Back to top
          <Icon name="arrow_forward" size="16px" style={{ transform: 'rotate(-90deg)' }} />
        </a>
      </div>

      <p className="site-foot__fine">© {new Date().getFullYear()} Mohammad Shamma</p>
    </footer>
  );
};

export default Footer;
