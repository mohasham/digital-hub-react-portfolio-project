import './marquee.styles.scss';

/**
 * Seamless horizontal ticker. The list is rendered twice so the
 * translation can loop without a visible jump.
 */
const Marquee = ({ items, speed = 42, reverse = false }) => (
  <div className="marquee" aria-hidden="true">
    <div
      className={`marquee__track ${reverse ? 'marquee__track--reverse' : ''}`}
      style={{ animationDuration: `${speed}s` }}
    >
      {[0, 1].map((copy) => (
        <ul className="marquee__row" key={copy}>
          {items.map((item) => (
            <li className="marquee__item" key={`${copy}-${item}`}>
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default Marquee;
