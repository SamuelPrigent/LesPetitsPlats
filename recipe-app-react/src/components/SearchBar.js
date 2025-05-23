import React, { useState } from 'react';

function SearchBar({ onSearchChange }) { // Changed prop name
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearchChange(newSearchTerm); // Call the handler from App.js
  };

  return (
    <div className="div-search-bar">
      <input
        id="mainSearchBar"
        className="search-bar"
        type="text"
        placeholder="Rechercher une recette"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="search-icon-div">
        <img className="search-icon" src="/assets/loupe.svg" alt="loupe" />
      </div>
    </div>
  );
}

export default SearchBar;
