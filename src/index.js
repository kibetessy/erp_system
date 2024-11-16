import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Customize primary color
    },
    secondary: {
      main: '#f50057', // Customize secondary color
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
  </React.StrictMode>
);
