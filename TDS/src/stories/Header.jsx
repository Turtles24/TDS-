import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './header.css';
import { Close } from './icons/Close';
import { Back } from './icons/Back';
import { Search } from './icons/Search';

export const Header = ({ onBack, onSearch, title }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showBackButton, setShowBackButton] = useState(false);

  const handleSearchClick = () => {
    setIsSearching(true);
    setShowBackButton(true); // 검색 아이콘 클릭 시 뒤로가기 버튼 표시
  };

  const handleBackClick = () => {
    setIsSearching(false);
    setShowBackButton(false); // 뒤로가기 버튼 클릭 시 원래 상태로 돌아감
    setSearchQuery(''); // 검색 입력 초기화
  };

  const handleClearSearch = () => {
    setSearchQuery(''); // 입력된 문자열만 초기화
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
          {(onBack || showBackButton) && ( // onBack이 true이거나 showBackButton이 true이면 뒤로가기 버튼 보임
            <button onClick={handleBackClick} className="back-button">
              <Back/>
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
                onClick={handleClearSearch} // Close 버튼에서 handleClearSearch 호출
                className="close-button"
              >
                <Close/>
              </button>
            </form>
          ) : (
            <h1>{title}</h1>
          )}
        </div>

        <div className="right">
  {onSearch && (
    <button onClick={handleSearchClick} className="search-button">
      <Search />
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
  onBack: true,
  onSearch: true,
  title: 'Turtles🐢',
};