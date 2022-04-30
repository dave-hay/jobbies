import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as smoothscroll from "smoothscroll-polyfill";
import App from './App';

smoothscroll.polyfill();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
