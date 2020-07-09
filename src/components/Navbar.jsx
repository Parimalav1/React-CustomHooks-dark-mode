import React from 'react';
import {useDarkmode} from '../hooks/useDarkmode';

const initialValue = false;

const Navbar = () => {
  const [navbarChanges, toggleMode] = useDarkmode(
    'navbar', initialValue);

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={navbarChanges ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
