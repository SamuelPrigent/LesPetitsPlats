import React, { useState, useEffect, useRef } from 'react';

function FilterDropdown({ title, items, selectedItems, onSelect, colorClass }) { // Added selectedItems
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm(''); 
    }
  };

  const handleItemClick = (item) => {
    onSelect(item); // This will now toggle the item in App.js state
    // setIsOpen(false); // Allowing multiple selections before closing
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Helper function to normalize text (remove accents, lowercase)
  // Replicated here as it's not globally available from App.js in this component
  const normalizeTextLocal = (text) => {
    if (typeof text !== 'string') return '';
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  const filteredItems = items.filter(item => {
    const normalizedItem = normalizeTextLocal(item);
    const normalizedSearch = normalizeTextLocal(searchTerm);
    return normalizedItem.includes(normalizedSearch);
  });
  
  const baseClass = 'dropdown-select';
  const openClass = isOpen ? 'dropdown-borderRadius' : '';
  const searchBarVisibleClass = isOpen ? 'dropdown-searchBar-visible' : '';
  const textInvisibleClass = isOpen ? 'dropdown-selected-invisible' : '';
  const arrowRotationClass = isOpen ? 'button-filter-arrow-rotate' : '';

  return (
    <div className={`dropdown ${isOpen ? 'dropdown-open' : ''}`} ref={dropdownRef} tabIndex={0}>
      <div
        id={`select${title.replace(/\s+/g, '')}`}
        className={`${baseClass} ${colorClass} ${openClass}`}
        onClick={toggleDropdown}
      >
        <div className="dropdown-selected">
          <div id={`search${title.replace(/\s+/g, '')}Text`} className={`dropdown-text ${textInvisibleClass}`}>
            {title}
          </div>
          <input
            autoComplete="off"
            id={`search${title.replace(/\s+/g, '')}`}
            placeholder={`Rechercher un ${title.toLowerCase().slice(0, -1)}`}
            className={`dropdown-searchBar ${colorClass} ${searchBarVisibleClass}`}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        <div className="button-filter-arrow-div">
          <img
            alt={`arrow ${title.toLowerCase()} button`}
            id={`arrow-${title.toLowerCase().split(' ')[0]}`}
            className={`button-filter-arrow ${arrowRotationClass}`}
            src={isOpen ? "/assets/arrowUp.svg" : "/assets/arrowDown.svg"}
          />
        </div>
      </div>
      {isOpen && (
        <div id={`main-${title.toLowerCase().split(' ')[0]}`} className={`dropdown-main ${colorClass}`}>
          <ul id={`section-${title.toLowerCase().split(' ')[0]}`} className={`dropdown-menu ${colorClass} dropdown-menu-open`}>
            {filteredItems.map((item, index) => (
              <li 
                key={index} 
                onClick={() => handleItemClick(item)}
                className={selectedItems && selectedItems.map(si => normalizeTextLocal(si)).includes(normalizeTextLocal(item)) ? 'selected-filter-item' : ''}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FilterDropdown;
