import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
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
          {/* Ajoutez d'autres liens de navigation selon vos besoins */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
