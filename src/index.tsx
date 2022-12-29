import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <AppRoutes />,
);
