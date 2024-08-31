import React from 'react';
import './Menu.css';

const Menu = ({ isOpen, onMenuClick }) => {
  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-close" onClick={() => onMenuClick('hamburger')}>
        &#10005;
      </div>
      <ul>
        <li onClick={() => onMenuClick('home')}>Home</li>
        <li onClick={() => onMenuClick('services')}>Services</li>
        <li onClick={() => onMenuClick('contact')}>Contact Us</li>
        <li onClick={() => onMenuClick('grid')}>Grid View</li>
        <li onClick={() => onMenuClick('tile')}>Tile View</li>
      </ul>
    </div>
  );
};

export default Menu;
