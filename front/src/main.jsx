import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PrimeReactProvider } from 'primereact/api'; // Import PrimeReactProvider
import './index.css'; // Import your styles

ReactDOM.render(
  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>,
  document.getElementById('root')
);
