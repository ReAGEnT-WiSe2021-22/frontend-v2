import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { fetchWiki } from './fetchWiki';
import { importWc } from './import-wc';
import './index.css';
import { setup } from './setup';

(async () => {
  const wiki = await fetchWiki();
  await importWc();
  await setup();

  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App wiki={wiki} />
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root'),
  );
})();
