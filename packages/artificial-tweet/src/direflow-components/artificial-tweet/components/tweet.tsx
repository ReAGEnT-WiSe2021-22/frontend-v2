import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
  Avatar,
  Box,
  Stack,
  Typography
} from '@mui/material';
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
    <Stack
      direction="row"
      sx={{
        px: 2,
        py: 1,
        border: 1,
        borderColor: 'grey.400',
        borderRadius: 1,
        marginBottom: '0.5rem',
      }}
    >
      <Avatar sx={{ marginRight: '0.5rem' }}>{tweet.name.charAt(0)}</Avatar>
      <Stack>
        <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{tweet.name}</Typography>
          <Typography variant="subtitle2" color="gray" sx={{ ml: 1 }}>
            @
            {tweet.username}
          </Typography>
        </Box>
        <Stack direction="row">
          <Typography sx={{ mr: 1 }}>{tweet.text}</Typography>
          {isCopied
            ? <CheckOutlinedIcon sx={{ color: 'gray' }} />
            : <ContentCopyIcon sx={{ cursor: 'pointer', color: 'gray' }} onClick={copyText} />}
        </Stack>
      </Stack>
    </Stack>
  );
};
