
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/a-propos">A Propos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
