import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import
import App from './App';
import { DashboardProvider } from './context/DashboardContext';

// Create the root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DashboardProvider>
      <App />
    </DashboardProvider>
  </React.StrictMode>
);
