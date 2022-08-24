
import React from 'react';
import ReactDOM from 'react-dom';
import {theme} from './theme'
import App from './App';
import { ThemeProvider } from '@material-ui/core';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
