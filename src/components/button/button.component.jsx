import { useEffect, useRef } from 'react';
import { BUTTON_TYPE_CLASSES } from './button.types';
import './button.styles.scss';

/**
 * Buttons lean slightly toward the pointer, which makes the primary
 * calls to action feel reachable without any library.
 */
const Button = ({
  children,
  buttonType = BUTTON_TYPE_CLASSES.primary,
  as = 'button',
  className = '',
  magnetic = true,
  ...otherProps
}) => {
  const Tag = as;
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !magnetic) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (event) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.22;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.32;
      el.style.setProperty('--tx', `${x.toFixed(1)}px`);
      el.style.setProperty('--ty', `${y.toFixed(1)}px`);
    };

    const onLeave = () => {
      el.style.setProperty('--tx', '0px');
      el.style.setProperty('--ty', '0px');
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [magnetic]);

  return (
    <Tag ref={ref} className={`button ${buttonType} ${className}`} {...otherProps}>
      <span className="button__label">{children}</span>
    </Tag>
  );
};

export default Button;
