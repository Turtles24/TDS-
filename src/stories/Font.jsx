// Font.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './font.css';

/** Font component for displaying styled text */
export const Font = ({ variant, content }) => {
  return <p className={`font font--${variant}`}>{content}</p>;
};

Font.propTypes = {
  /** Variant of the text (title, caption, body) */
  variant: PropTypes.oneOf([
    'title-1', 'title-2', 'title-3', 'title-4', 'title-5', 'title-6',
    'body-1', 'body-2', 'body-3', 'body-4', 'body-5', 'body-6',
    'caption-1', 'caption-2', 'caption-3', 'caption-4', 'caption-5',
  ]).isRequired,
  /** Text content */
  content: PropTypes.string.isRequired,
};

Font.defaultProps = {
  content: 'Sample Text',
};
