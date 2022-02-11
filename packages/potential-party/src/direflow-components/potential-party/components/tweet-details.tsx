import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Tweet } from '../../../types';

interface TweetDetailsProps {
  tweet?: Tweet
  onClear: () => void
}

/**
 *
 * @param tweet Tweet object.
 * @param onClear VoidFunction to clear Tweet object.
 * @returns A JSON formatted Tweet Details View.
 */
export const TweetDetails: React.FC<TweetDetailsProps> = ({ tweet, onClear }) => {
  const alignment = tweet ? 'start' : 'center';

  let content: React.ReactElement;
  if (!tweet) {
    content = <Typography>No tweets dropped</Typography>;
  } else {
    content = (
      <Box maxWidth={1}>
        <Typography variant="caption">
          <pre style={{ overflow: 'scroll' }}>
            {JSON.stringify(tweet, null, 2)}
          </pre>
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
