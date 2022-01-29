import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout';
import { microfrontends } from './import-wc';
import { Page404 } from './pages/404';
import { Home } from './pages/home/index';

/**
 *
 * @param wiki Wiki markdown data.
 * @returns A container App View.
 */
const App = ({ wiki }: { wiki: string }): JSX.Element => (
  <Layout>
    <Routes>
      <Route path="/" element={<Home wiki={wiki} />} />
      {microfrontends.map((mf) => {
        const Element = mf;
        return <Route key={mf} path={`/${mf}`} element={<Element />} />;
      })}
      <Route path="*" element={<Page404 />} />
    </Routes>
  </Layout>
);

export default App;
