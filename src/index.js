import React from 'react';
import ReactDOM from 'react-dom';
import Router from './pages/Router/index.jsx';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';


ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={ theme }>
        <Router />
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
