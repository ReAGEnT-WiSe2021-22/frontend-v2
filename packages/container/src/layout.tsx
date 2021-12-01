import cx from 'classnames';
import React from 'react';
import { microfrontends } from './import-wc';

const capitalizeFirstLetter = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);
const titleCase = (title: string) => title.split('-').map((word) => capitalizeFirstLetter(word)).join(' ');

const Header: React.FunctionComponent = () => (
  <nav className="flex p-4 bg-indigo-400 text-indigo-100">
    {['home', ...microfrontends].map((mf) => {
      const { pathname } = window.location;
      const path = `/frontend-v2/${mf === 'home' ? '' : mf}`;
      const active = mf === 'home' ? pathname === '/frontend-v2/' : pathname.includes(mf);
      return (
        <a className={cx({ 'text-white': active }, 'hover:text-white mr-4')} key={mf} href={path}>
          {titleCase(mf)}
        </a>
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
