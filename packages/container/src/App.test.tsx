import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

jest.mock(
  'react-markdown',
  () => function (props: { children: any }) {
    return props.children;
  },
);

test('renders frontend v2 title', () => {
  render(
    <MemoryRouter>
      <App wiki="" />
    </MemoryRouter>,
  );
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
