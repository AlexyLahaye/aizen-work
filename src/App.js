import React, { useState } from 'react';
import './assets/styles/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import HomePage from './views/Home/HomePage';
import theme from './assets/themes/theme';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const themeColor = 
  { background: darkMode ? theme.dark.background : theme.light.background, 
    color: darkMode ? theme.dark.text : theme.light.text }
  

  return (
    <Router>
      <div className="App" style={themeColor}>
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;
