import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NombreCompleto from './components/NombreCompleto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App />
    <NombreCompleto name="Ruben" age="28"/>
    <NombreCompleto name="Raul" age="26" />
  </React.StrictMode>
);


