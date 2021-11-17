import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import 'normalize.css';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.querySelector('#root'),
);
