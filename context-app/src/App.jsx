// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './Header';


const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        
      </div>
    </ThemeProvider>
  );
};

export default App;
