import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({ width, height, color }) => {
  return (
    <div
      style={{
        width: width || '501px',
        height: height || '1px',
        backgroundColor: color || 'rgba(136, 136, 136, 0.30)',
      }}
    ></div>
  );
};

Divider.propTypes = {
  width: PropTypes.string, // Width of the divider (e.g., "501px")
  height: PropTypes.string, // Height of the divider (e.g., "1px")
  color: PropTypes.string, // Color of the divider (e.g., "rgba(136, 136, 136, 0.30)")
};

Divider.defaultProps = {
  width: '501px',
  height: '1px',
  color: 'rgba(136, 136, 136, 0.30)',
};

export default Divider;
