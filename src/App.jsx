import React, { useContext, useEffect, useState } from 'react';
import Category from './components/Category';
import { DashboardContext } from './context/DashboardContext';
import './App.css';

function App() {
  const { state, dispatch } = useContext(DashboardContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredWidgets, setFilteredWidgets] = useState([]);
  const [displayedWidgets, setDisplayedWidgets] = useState([]);

  useEffect(() => {
    fetch('/widgets.json')  
      .then(response => response.json())
      .then(data => dispatch({ type: 'LOAD_INITIAL_DATA', payload: data }))
      .catch(error => console.error('Error fetching data:', error));
  }, [dispatch]);
  

  const onAddWidget = (categoryId, widgetData) => {
    dispatch({ type: 'ADD_WIDGET', payload: { categoryId, widgetData } });
  };

  const onRemoveWidget = (categoryId, widgetId) => {
    dispatch({ type: 'REMOVE_WIDGET', payload: { categoryId, widgetId } });
  };

  const onAddCategory = () => {
    const categoryName = prompt("Enter a name for the new category:");
    if (categoryName) {
      dispatch({ type: 'ADD_CATEGORY', payload: { categoryName } });
    }
  };
  const onRefresh = () => {
    window.location.reload();
  };
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    const lowercasedQuery = event.target.value.toLowerCase();
    
    if (lowercasedQuery) {
      const allWidgets = state.categories.flatMap(category => category.widgets);
      const matchedWidgets = allWidgets.filter(widget => 
        widget.name.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredWidgets(matchedWidgets);
    } else {
      setFilteredWidgets([]);
    }
  };
  const handleWidgetClick = (widget) => {
    console.log('clicked')
    setDisplayedWidgets(prevWidgets => [...prevWidgets, widget]);
  };

  return (
    <div className="App">
      <div className="dashboard-header">
        <h2 className="dashboard-title">CNAPP Dashboard</h2>
        <div>
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Search widgets..." 
          value={searchQuery} 
          onChange={handleSearch}/>
          <button onClick={onAddCategory} className="add-category-button">Add Category +</button>
          <button onClick={onRefresh} className="refresh-button">↻</button>
          <button className="refresh-button">⁝</button>
        </div>
      </div>

      {searchQuery ? (
        <div className="search-results">
          {filteredWidgets.length > 0 ? (
            filteredWidgets.map(widget => (
              <div 
                key={widget.id} 
                className="search-result-item"
                onClick={() => handleWidgetClick(widget)}
              >
                {widget.name}
              </div>
            ))
          ) : (
            <p>No widgets found.</p>
          )}
        </div>
      ) : (
        state.categories.map(category => (
          <Category
            key={category.id}
            category={category}
            onAddWidget={onAddWidget}
            onRemoveWidget={onRemoveWidget}
          />
        ))
      )}

      {displayedWidgets.length > 0 && (
        <div className="displayed-widgets">
          {displayedWidgets.map(widget => (
            <div key={widget.id} className="widget-item">
              <h3>{widget.name}</h3>
              <p>{widget.description}</p>  
              <p><strong>Type:</strong> {widget.type}</p> 
              
            </div>
          ))}
        </div>
      )}
        </div>
  );
}

export default App;
