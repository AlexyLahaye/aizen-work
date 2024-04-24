import React from 'react';
import { Link } from 'react-router-dom';

function Header({ darkMode, toggleTheme }) {
  return (
    <header className="background-color">
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
          <button onClick={toggleTheme}>{darkMode ? 'Mode Clair' : 'Mode Sombre'}</button>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
