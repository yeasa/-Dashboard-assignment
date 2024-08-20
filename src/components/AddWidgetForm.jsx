import React, { useState } from 'react';

const AddWidgetForm = ({ onAdd, onCancel }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && text) {
      onAdd({ name, text });
      setName('');
      setText('');
    }
  };

  return (
  <div className="widget add-widget-form">
    <form onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="Widget Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Widget Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          // required
        />
        <button type="submit">Add Widget</button>
        <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  </div>
  );
};

export default AddWidgetForm;
