import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Tweet } from '../../../types';

export const TweetDetails: React.FunctionComponent<{
  tweet?: Tweet
  onClear: () => void
}> = ({ tweet, onClear }) => {
  const alignment = tweet ? 'start' : 'center';

  let content: React.ReactElement;
  if (!tweet) {
    content = <Typography>No tweets dropped</Typography>;
  } else {
    content = (
      <Box>
        <Typography variant="caption">
          <pre>{JSON.stringify(tweet, null, 2)}</pre>
        </Typography>
        <Button onClick={onClear}>Clear</Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: alignment,
        alignItems: alignment,
        minWidth: 120,
      }}
      height={500}
    >
      {content}
    </Box>
  );
};
