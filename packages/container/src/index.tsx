import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { importWc, microfrontends } from './import-wc';
import { setup } from './setup';
import { Layout } from './layout';

import './index.css';

(async () => {
  await importWc();
  await setup();

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/frontend-v2/" element={<App />} />
            {microfrontends.map((mf) => {
              const Element = mf;
              return <Route key={mf} path={`/frontend-v2/${mf}`} element={<Element />} />;
            })}
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
  );
})();
