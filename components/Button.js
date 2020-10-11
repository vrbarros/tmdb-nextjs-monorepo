import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { children, ...otherProps } = props;

  return <button {...otherProps}>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.any,
};

export default Button;
