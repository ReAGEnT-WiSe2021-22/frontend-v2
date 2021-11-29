import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { importWc } from './import-wc';
import { setup } from './setup';

(async () => {
  await importWc();
  await setup();

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );

  reportWebVitals();
})();
