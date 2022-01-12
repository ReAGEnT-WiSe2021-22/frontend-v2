import cx from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiLinkExternal } from 'react-icons/bi';
import { microfrontends } from './import-wc';

const capitalizeFirstLetter = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);
const titleCase = (title: string) => title.split('-').map((word) => capitalizeFirstLetter(word)).join(' ');

const Header: React.FunctionComponent = () => (
  <nav className="flex p-4 bg-primary text-indigo-100">
    {['home', ...microfrontends].map((mf) => (
      <NavLink
        key={mf}
        className={({ isActive }) => cx('hover:text-white mr-4', { 'text-white': isActive })}
        to={`/${mf === 'home' ? '' : mf}`}
      >
        {titleCase(mf)}
      </NavLink>
    ))}
    <a href="/v1" className="flex items-center hover:text-white">
      Old Frontend
      <BiLinkExternal className="ml-1" />
    </a>
  </nav>
);

export const Layout: React.FunctionComponent = ({ children }) => (
  <div className="flex flex-col min-h-full min-w-full">
    <Header />
    {children}
  </div>
);
