import React from 'react'; 
import ReactDOM from 'react-dom/client';
import './index.css';
import StakeList from './StakeList';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StakeList />
  </React.StrictMode>
);
