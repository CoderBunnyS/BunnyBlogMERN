import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx';
import './index.css';
import auth_config from './auth_config.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Auth0Provider
      domain={auth_config.domain}
      clientId={auth_config.clientId}
      audience={auth_config.audience}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
