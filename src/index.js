import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StakeList from './StakeList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StakeList />
  </React.StrictMode>
);
