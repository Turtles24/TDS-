import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './header.css';
import { ReactComponent as BackIcon } from './assets/Back.svg';
import { ReactComponent as SearchIcon } from './assets/Search.svg';
import { ReactComponent as CloseIcon } from './assets/Close.svg';

export const Header = ({ onBack, onSearch, title }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchClick = () => {
    setIsSearching(true);
  };

  const handleBackClick = () => {
    setIsSearching(false);
    setSearchQuery('');
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <header>
      <div className="storybook-header">
        <div className="left">
          {onBack && (
            <button onClick={handleBackClick} className="back-button">
              <BackIcon width="24" height="24" />
            </button>
          )}
        </div>

        <div className="center">
          {isSearching ? (
            <form onSubmit={handleSearchSubmit} className="search-form">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                placeholder="검색어 입력하기 :"
              />
              <button
                type="button"
                onClick={handleBackClick}
                className="close-button"
              >
                <CloseIcon width="24" height="24" />
              </button>
            </form>
          ) : (
            <h1>{title}</h1>
          )}
        </div>

        <div className="right">
          {onSearch && !isSearching && (
            <button onClick={handleSearchClick} className="search-button">
              <SearchIcon width="24" height="24" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onBack: PropTypes.bool,
  onSearch: PropTypes.bool,
  title: PropTypes.string,
};

Header.defaultProps = {
  onBack: false,
  onSearch: false,
  title: 'Turtles🐢',
};
