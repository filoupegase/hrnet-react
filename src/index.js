import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router/index.jsx';
import reportWebVitals from './reportWebVitals';
import './index.css';


ReactDOM.render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
