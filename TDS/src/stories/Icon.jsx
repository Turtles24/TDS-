// Icon.js
import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ type, size }) => {
  const icons = {
    "arrow-up": "↑",
    "arrow-down": "↓",
    "arrow-left": "←",
    "arrow-right": "→",
    "close": "✕",
    "menu": "☰",
    "home": "🏠",
    "settings": "⚙️",
    "search": "🔍",
    "bell": "🔔",
    "user": "👤"
  };

  return (
    <span style={{ fontSize: size }}>
      {icons[type]}
    </span>
  );
};

Icon.propTypes = {
  type: PropTypes.oneOf([
    "arrow-up",
    "arrow-down",
    "arrow-left",
    "arrow-right",
    "close",
    "menu",
    "home",
    "settings",
    "search",
    "bell",
    "user"
  ]).isRequired,
  size: PropTypes.string
};

Icon.defaultProps = {
  size: '24px'
};

export default Icon;
