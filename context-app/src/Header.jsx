// Header.js
import { ThemeContext} from './ThemeContext';
import React, { useContext } from 'react';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header style={{ background: theme === 'light' ? '#f0f0f0' : '#333', padding: '1rem',color: theme === 'light' ? 'black' : 'white' }}>
      <h1>Theme Switcher</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;
