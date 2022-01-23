import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router/index.jsx';
import { ThemeProvider } from '@mui/material/styles';
import reportWebVitals from './reportWebVitals';
import theme from './styles/theme';


const app = (
    <React.StrictMode>
      <ThemeProvider theme={ theme }>
        <Router />
      </ThemeProvider>
    </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));


reportWebVitals();
