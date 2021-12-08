import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { GeneratedTweet } from '../../../types';

export const Tweet: React.FunctionComponent<{ tweet: GeneratedTweet }> = ({ tweet }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyText = async () => {
    await navigator.clipboard.writeText(tweet.text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };
  return (
    <Box sx={{
      p: 1,
      border: 1,
      borderColor: 'grey.400',
      borderRadius: 1,
    }}
    >
      <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{tweet.name}</Typography>
        <Typography variant="subtitle2" color="gray" sx={{ ml: 1 }}>
          @
          {tweet.username}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Typography sx={{ mr: 1 }}>{tweet.text}</Typography>
        {isCopied
          ? <CheckOutlinedIcon sx={{ color: 'gray' }} />
          : <ContentCopyIcon sx={{ cursor: 'pointer', color: 'gray' }} onClick={copyText} />}
      </Box>
    </Box>
  );
};
