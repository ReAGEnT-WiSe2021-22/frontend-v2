import { Stack } from '@mui/material';
import React from 'react';

/**
 *
 * @param children Children elements.
 * @returns Clean padded View of children elements.
 */
export const Wrapper: React.FC = ({ children }) => (
  <Stack padding={6}>
    {children}
  </Stack>
);
