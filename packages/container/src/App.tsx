import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { microfrontends } from './import-wc';
import { Layout } from './layout';
import { Home } from './Home';

const Page404: React.FunctionComponent = () => (
  <div>404 Page not found</div>
);

const App = ({ wiki }: {wiki: string}): JSX.Element => (
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
