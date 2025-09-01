import React from 'react';

// PUBLIC_INTERFACE
function Header({ searchTerm, onSearchChange }) {
  return (
    <header className="header-container">
      <div className="search-row">
        <div className="search-box">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7.5" stroke="#d9d9d9" strokeWidth="1.5" />
            <path d="M20 20l-3.2-3.2" stroke="#d9d9d9" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            id="search-input"
            type="text"
            placeholder="Search recipe"
            aria-label="Search recipe"
            value={searchTerm}
            onChange={onSearchChange}
          />
        </div>
        <button id="filter-btn" className="click" aria-label="Open filters">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M8 7h8M6 12h12M10 17h4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
