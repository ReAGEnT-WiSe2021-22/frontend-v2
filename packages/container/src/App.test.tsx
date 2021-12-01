import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders frontend v2 title', () => {
  render(<App />);
  const linkElement = screen.getByText(/frontend v2/i);
  expect(linkElement).toBeInTheDocument();
});
