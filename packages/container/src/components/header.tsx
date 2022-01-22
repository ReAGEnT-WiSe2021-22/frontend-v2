import cx from 'classnames';
import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { microfrontends } from '../import-wc';
import { titleCase } from '../utils/string-util';

/**
 *
 * A Header component consists of routes to web components
 */
export const Header: React.FC = () => (
  <nav className="flex p-4 bg-primary text-blue-200">
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
