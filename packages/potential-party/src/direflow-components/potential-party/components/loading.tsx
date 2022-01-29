import { Skeleton, Stack } from '@mui/material';
import React from 'react';
import { Wrapper } from './wrapper';

/**
 *
 * @returns A Loading Skeleton View.
 * View consists of 1 rectangle and 3 columns.
 */
export const Loading: React.FC = () => (
  <Wrapper>
    <Skeleton
      variant="rectangular"
      height={60}
      width={350}
      sx={{ marginBottom: 3 }}
    />
    <Stack direction="row">
      <Skeleton variant="rectangular" height={500} width={450} sx={{ marginRight: 3 }} />
      <Skeleton variant="rectangular" height={500} width={450} sx={{ marginRight: 3 }} />
      <Skeleton variant="rectangular" height={500} width={450} sx={{ marginRight: 3 }} />
    </Stack>
  </Wrapper>
);
