import React, { createContext, useReducer } from 'react';

// Initial State
const initialState = {
  categories: [] // This will be populated with data from the JSON file
};

// Reducer Function
const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_INITIAL_DATA':
      return {
        ...state,
        categories: action.payload.categories
      };
    case 'ADD_WIDGET':
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: [
                  ...category.widgets,
                  { id: Date.now(), ...action.payload.widgetData }
                ]
              }
            : category
        )
      };
    case 'REMOVE_WIDGET':
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.categoryId
            ? {
                ...category,
                widgets: category.widgets.filter(widget => widget.id !== action.payload.widgetId)
              }
            : category
        )
      };
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [
          ...state.categories,
          {
            id: Date.now(), // Generate a unique ID for the new category
            title: action.payload.categoryName || `New Category ${state.categories.length + 1}`, // Use the provided category name or default
            widgets: [] // Start with an empty widgets array
          }
        ]
      };
    default:
      return state;
  }
};

// Create Context
export const DashboardContext = createContext();

// Context Provider
export const DashboardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
};
