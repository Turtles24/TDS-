import React from 'react';
import PropTypes from 'prop-types';
import './header.css';
import { ReactComponent as BackIcon } from './assets/Back.svg';
import { ReactComponent as SearchIcon } from './assets/Search.svg';

export const Header = ({ onBack, onSearch, title }) => (
  <header>
    <div className="storybook-header">
      <div className="left">
        {onBack && (
          <button onClick={() => {}} className="back-button">
            <BackIcon width="24" height="24" />
          </button>
        )}
      </div>

      <div className="center">
        <h1>{title}</h1>
      </div>

      <div className="right">
        {onSearch && (
          <button onClick={() => {}} className="search-button">
            <SearchIcon width="24" height="24" />
          </button>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  onBack: PropTypes.bool,
  onSearch: PropTypes.bool,
  title: PropTypes.string,
};

Header.defaultProps = {
  onBack: false,
  onSearch: false,
  title: '타이틀',
};
