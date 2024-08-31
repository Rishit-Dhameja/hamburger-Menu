// src/components/ExpandedView.js
import React from 'react';
import './ExpandedView.css';

const ExpandedView = ({ item, onBackClick }) => {
  return (
    <div className="expanded-view">
      <button onClick={onBackClick}>Back to Tile View</button>
      <div className="expanded-content">
        <h2>{item.name}</h2>
        <p>Email: {item.email}</p>
        <p>Phone: {item.phone}</p>
        <p>Website: {item.website}</p>
        {/* Add more fields if necessary */}
      </div>
    </div>
  );
};

export default ExpandedView;
