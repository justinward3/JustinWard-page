import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#424242',
      main: '#263238',
      dark: '#424242',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#263238',
      contrastText: '#263238',
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
    </MuiThemeProvider>,
  document.getElementById('root')
);
