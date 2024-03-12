
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';
const Nav = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/Apropos">A Propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
