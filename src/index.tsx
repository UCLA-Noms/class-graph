import React, { StrictMode } from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <HelmetProvider>
    <Helmet>
      <meta
        httpEquiv="Content-Security-Policy"
        content={`
                  default-src 'none';
                  script-src 'self';
                  connect-src 'self';
                  img-src 'self';
                  style-src 'self';
                  frame-ancestors 'self';
                  form-action 'self';
                  require-trusted-types-for 'script';
                `}
      ></meta>
    </Helmet>
    <StrictMode>
      <App />
    </StrictMode>
  </HelmetProvider>,
);
