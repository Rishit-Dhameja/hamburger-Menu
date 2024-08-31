import React from 'react';
import './Header.css';
import Menu from './Menu'; // Import the Menu component

const Header = ({ onMenuClick, isMenuOpen }) => {
  return (
    <header className="header">
      <div className="hamburger" onClick={() => onMenuClick('hamburger')}>
        &#9776;
      </div>
      <nav className="horizontal-menu">
        <ul>
          <li onClick={() => onMenuClick('grid')}>Grid View</li>
          <li onClick={() => onMenuClick('tile')}>Tile View</li>
        </ul>
      </nav>
      {isMenuOpen && <Menu onMenuClick={onMenuClick} />} {/* Show the Menu when open */}
    </header>
  );
};

export default Header;
