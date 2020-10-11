import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { children, ...otherProps } = props;

  return (
    <button type="button" {...otherProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Button;
