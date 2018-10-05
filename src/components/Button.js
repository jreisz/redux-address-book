import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, className, text }) => (
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
