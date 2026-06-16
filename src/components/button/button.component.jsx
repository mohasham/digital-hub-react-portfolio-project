// src/components/button/button.component.jsx
import './button.styles.scss';

export const BUTTON_TYPE_CLASSES = {
  primary: 'button--primary',
  secondary: 'button--secondary',
  submit: 'button--submit',
};

const Button = ({
  children,
  buttonType = BUTTON_TYPE_CLASSES.primary,
  as = 'button',
  className = '',
  ...otherProps
}) => {
  const Tag = as;

  return (
    <Tag className={`button ${buttonType} ${className}`} {...otherProps}>
      {children}
    </Tag>
  );
};

export default Button;