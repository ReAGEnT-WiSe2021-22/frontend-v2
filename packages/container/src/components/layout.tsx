import React from 'react';
import { Header } from './header';

/**
 *
 * @param children Children elements
 * @returns Children View with header
 */
export const Layout: React.FC = ({ children }) => (
  <div className="flex flex-col min-h-full min-w-full">
    <Header />
    {children}
  </div>
);
