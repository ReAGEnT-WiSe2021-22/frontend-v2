import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { importWc, microfrontends } from './import-wc';
import './index.css';
import { Layout } from './layout';
import { setup } from './setup';

(async () => {
  await importWc();
  await setup();

  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<App />} />
            {microfrontends.map((mf) => {
              const Element = mf;
              return <Route key={mf} path={`/${mf}`} element={<Element />} />;
            })}
          </Routes>
        </Layout>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root'),
  );
})();
