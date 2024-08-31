// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import './styles.css';
import Header from './components/Header';
import ExpandedView from './components/ExpandedView';
import View from './components/View';
import Title from './components/Title';
import Menu from './components/Menu';
import axios from 'axios';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import { data } from './Data'; 



function App() {
  const [view, setView] = useState('grid');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  const handleMenuClick = (menuOption) => {
    if (menuOption === 'hamburger') {
      setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
    } else if (menuOption === 'grid') {
      setView('grid');
      setCurrentPage('home');
    } else if (menuOption === 'tile') {
      setView('tile');
      setCurrentPage('home');
    } else if (menuOption === 'home') {
      setCurrentPage('home');
      setIsMenuOpen(false); // Close menu after selection
    } else if (menuOption === 'services') {
      setCurrentPage('services');
      setIsMenuOpen(false); // Close menu after selection
    } else if (menuOption === 'contact') {
      setCurrentPage('contact');
      setIsMenuOpen(false); // Close menu after selection
    }
  };

  const handleTileClick = (item) => {
    setSelectedItem(item);
    setView('expanded');
  };

  const handleBackClick = () => {
    setSelectedItem(null);
    setView('grid');
  };

  return (
    <div className="App">
      <Header onMenuClick={handleMenuClick} />
      <Menu isOpen={isMenuOpen} onMenuClick={handleMenuClick} />
      {currentPage === 'home' && (
        <>
          {view === 'grid' && <View data={data} onTileClick={handleTileClick} />}
          {view === 'tile' && <Title data={data} onTileClick={handleTileClick} />}
          {view === 'expanded' && selectedItem && <ExpandedView item={selectedItem} onBackClick={handleBackClick} />}
        </>
      )}
      {currentPage === 'services' && <Services />}
      {currentPage === 'contact' && <Contact />}
    </div>
  );
}

export default App;
