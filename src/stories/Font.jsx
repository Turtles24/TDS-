// Font.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './font.css';

/** Font component for displaying styled text */
export const Font = ({ variant, type, content }) => {
  return <p className={`font font--${variant}--${type}`}>{content}</p>;
};

Font.propTypes = {
  /** Variant of the text (title, caption, body) */
  variant: PropTypes.oneOf(['Title', 'Body', 'Caption']).isRequired,
  /** Type of the variant */
  type: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']).isRequired,
  /** Text content */
  content: PropTypes.string.isRequired,
};

Font.defaultProps = {
  content: 'Sample Text',
};
