import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Home from './main-page';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Home />
  </>
);


