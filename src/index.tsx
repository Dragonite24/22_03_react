import React from 'react';
import ReactDOM from 'react-dom/client';

import { LoadingProvider } from 'components/LoadingProvider';
import { Home } from 'pages';

import 'reset-css';
import './global-styles/_index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <LoadingProvider>
      <Home />
    </LoadingProvider>
  </React.StrictMode>
);
