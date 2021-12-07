import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { microfrontends } from './import-wc';
import { Layout } from './layout';

const Page404: React.FunctionComponent = () => (
  <div>404 Page not found</div>
);

const Home: React.FunctionComponent = () => (
  <div>Frontend-v2</div>
);

const App: React.FunctionComponent = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      {microfrontends.map((mf) => {
        const Element = mf;
        return <Route key={mf} path={`/${mf}`} element={<Element />} />;
      })}
      <Route path="*" element={<Page404 />} />
    </Routes>
  </Layout>
);

export default App;
