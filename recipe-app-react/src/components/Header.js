import React, { useContext } from 'react'; // Import useContext
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <img className="header-logo" src="/assets/logo.svg" alt="logo" />
      <h1 className="header-title">Les petits plats</h1>
      <button onClick={toggleTheme} className="theme-toggle-button">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}

export default Header;
