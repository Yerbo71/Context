// ThemeContext.js
import React, { createContext, useState, useCallback,useMemo } from 'react';

export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [jack, setJack] = useState("ghkkjh");
  const upcase = useMemo(() => theme.toUpperCase() + " " +jack.toUpperCase(), [theme]);

  const toggleTheme = useCallback (  
    () =>{setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));},
  []);
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>{children}{upcase}</ThemeContext.Provider>
  );
};
