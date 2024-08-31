// src/components/GridView.js
import React from 'react';
import './View.css';

const GridView = ({ data, onTileClick }) => {
  return (
    <div className="grid-view">
      {data.map((item) => (
        <div className="grid-item" key={item.id} onClick={() => onTileClick(item)}>
          <div className="grid-item-content">
            <div>{item.name}</div>
            <div>{item.email}</div>
            <div>{item.phone}</div>
            <div>{item.website}</div>
            {/* Add more fields here */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridView;
