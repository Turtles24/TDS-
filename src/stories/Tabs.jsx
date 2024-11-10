// Tabs.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './tabs.css';

export const Tabs = ({ items, initialActiveIndex, styleVariant }) => {
  // State to track the active tab
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  // Function to handle tab click
  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={`tabs tabs--${styleVariant}`}>
      {items.map((item, index) => (
        <button
          key={index}
          className={`tab ${index === activeIndex ? 'tab--active' : ''}`}
          onClick={() => handleTabClick(index)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

Tabs.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialActiveIndex: PropTypes.number,
  styleVariant: PropTypes.oneOf(['rectangular', 'rounded', 'underline']),
};

Tabs.defaultProps = {
  initialActiveIndex: 0,
  styleVariant: 'rectangular',
};
