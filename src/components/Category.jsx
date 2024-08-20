import React from 'react';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';


const Category = ({ category, onAddWidget, onRemoveWidget }) => {
  const [isAdding, setIsAdding] = React.useState(false);

  return (
    <div className="dashboard">
      <h2 className="category-title">{category.name}</h2>
      <div className="category-container">
      {category.widgets.map(widget => (
        <Widget
          key={widget.id}
          widget={widget}
          onRemoveWidget={() => onRemoveWidget(category.id, widget.id)}
        />
      ))}
      {isAdding ? (
        <AddWidgetForm
          onAdd={(widgetData) => {
            onAddWidget(category.id, widgetData);
            setIsAdding(false);
          }}
          onCancel={() => setIsAdding(false)}
        />
      ) : (
        <button className='widget new-widget' onClick={() => setIsAdding(true)}>+ Add Widget</button>
      )}
      </div>
    </div>
  );
};

export default Category;
