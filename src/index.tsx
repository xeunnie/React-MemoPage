import React from 'react';
import ReactDOM from 'react-dom/client';

import Routes from 'src/Routes';

import 'src/styles/normalize.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
);
