import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, className, text }) => (
  <button onClick={onClick} className={className} type="button">
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  text: PropTypes.string,
};

Button.defaultProps = {
  className: 'a-class-name',
  text: 'Button text',
};

export default Button;
