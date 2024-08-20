import React from 'react';

const Widget = ({ widget, onRemoveWidget }) => {
  return (
    <div className="widget">
      <h3 className="widget-title">{widget.name}</h3>
      <p className="widget-content">{widget.text}</p>
      <button className="remove-widget-button" onClick={onRemoveWidget}>Remove</button>
    </div>
  );
};

export default Widget;
