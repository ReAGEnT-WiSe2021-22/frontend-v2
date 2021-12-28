import { Box, Typography } from '@mui/material';
import React from 'react';
import { Tweet } from '../../../types';

export const TweetDetails: React.FC<{ tweet?: Tweet }> = ({ tweet }) => (
  <Box>
    {tweet
      ? <Typography variant="caption"><pre>{JSON.stringify(tweet, null, 2)}</pre></Typography>
      : <Typography>No tweets dropped</Typography>}
  </Box>
);
