import React, { useState, useEffect } from 'react';
import GlobalStyles from './assets/styles/GlobalStyles';
import './assets/styles/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header/Header';
import HotelTravelLandingPage from './views/Template/HotelTravelLandingPage';
import Login from './views/Login/Login';
import Blog from './views/Blog/Blog';
import theme from './assets/themes/theme';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };
  
  const [token, setToken] = useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { if (sessionStorage.getItem("token") !== null) setToken(sessionStorage.getItem("token")); })
  const tokenManager = (jwtToken) => {
    setToken(jwtToken);
    sessionStorage.setItem("token", jwtToken);
  };

  // TODO REGLER LE PROBLEME DE LA PAGE BLOG
  //const [link, setLink] = useState("Login")
  //useEffect(() => {if (sessionStorage.getItem("token") !== null);})

  const themeColor = 
  { background: darkMode ? theme.dark.background : theme.light.background, 
    color: darkMode ? theme.dark.text : theme.light.text }
  

  return (
    <>
      <GlobalStyles />
      <Router>
        <div className="App" style={themeColor}>
          <Header darkMode={darkMode} toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<HotelTravelLandingPage/>} />
            <Route path="/Login" element={<Login tokenManager={tokenManager} token={token}/>} />
            <Route path="/Blog" element={<Blog tokenManager={tokenManager} token={token}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
