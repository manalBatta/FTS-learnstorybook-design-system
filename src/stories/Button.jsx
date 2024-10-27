import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ variant, color, size, label, ...props }) => {
  const style = {
    backgroundColor: variant === 'primary' ? color : 'white',
    borderColor: color,
    color: variant === 'primary' ? 'white' : color,
    borderWidth: variant === 'text' ? '0' : '2px',
  };

  return (
    <button
      type='button'
      className={`storybook-button storybook-button--${variant} storybook-button--${size}`}
      style={style}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'text']),
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  color: 'blue',
  size: 'medium',
  onClick: undefined,
};
