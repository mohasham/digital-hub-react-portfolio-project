
/**
 * Marks a subtree for scroll reveal. The nearest section owns the observer
 * (see useReveal), so this component only sets the attributes.
 *
 *   <Reveal as="h2" variant="mask" delay={120}>Featured work</Reveal>
 *
 * The "mask" variant wipes text up from behind its own edge. The clip lives
 * on an inner span rather than on the observed element: a clip-path on the
 * target empties its intersection rectangle in Chromium, and the observer
 * would then never fire.
 */
const Reveal = ({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) => (
  <Tag
    data-reveal={variant}
    className={className}
    style={{ '--reveal-delay': `${delay}ms`, ...style }}
    {...rest}
  >
    {variant === 'mask' ? <span className="reveal-mask">{children}</span> : children}
  </Tag>
);

export default Reveal;
