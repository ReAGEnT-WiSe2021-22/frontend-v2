import React from 'react';
import { Link } from 'react-router-dom';
import { microfrontends } from './import-wc';

export const Layout: React.FunctionComponent = ({ children }) => (
  <div>
    <nav>{microfrontends.map((mf) => <Link key={mf} to={`/frontend-v2/${mf}`}>{mf}</Link>)}</nav>
    {children}
  </div>
);
