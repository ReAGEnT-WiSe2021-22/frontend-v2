import React from 'react';
import { Link } from 'react-router-dom';
import { microfrontends } from './import-wc';

const capitalizeFirstLetter = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);
const titleCase = (title: string) => title.split('-').map((word) => capitalizeFirstLetter(word)).join(' ');

const Header: React.FunctionComponent = () => (
  <nav className="flex p-4 bg-indigo-400 text-indigo-100">
    {['home', ...microfrontends].map((mf) => {
      const path = `/frontend-v2/${mf === 'home' ? '' : mf}`;
      return (
        <Link className="hover:text-white mr-4" key={mf} to={path}>
          {titleCase(mf)}
        </Link>
      );
    })}
  </nav>
);

export const Layout: React.FunctionComponent = ({ children }) => (
  <div className="flex flex-col min-h-full min-w-full">
    <Header />
    <div className="m-4">{children}</div>
  </div>
);
