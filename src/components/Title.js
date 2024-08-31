import React from 'react';
import './Title.css';

const TileView = ({ data, onTileClick, onActionClick }) => {
  return (
    <div className="tile-view">
      {data.map((item) => (
        <div className="tile-item" key={item.id} onClick={() => onTileClick(item)}>
          <div className="tile-item-content">
            <div>{item.name}</div>
            <div>{item.email}</div>
            <div>{item.phone}</div>
            {/* Add necessary fields here */}
          </div>
          <div className="title-actions">
  <button className="edit" onClick={(e) => { e.stopPropagation(); onActionClick('edit', item); }}>Edit</button>
  <button className="flag" onClick={(e) => { e.stopPropagation(); onActionClick('flag', item); }}>Flag</button>
  <button className="delete" onClick={(e) => { e.stopPropagation(); onActionClick('delete', item); }}>Delete</button>
</div>

        </div>
      ))}
    </div>
  );
};

export default TileView;
