import {
  Avatar,
  Box,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../../const';
import { Tweet } from '../../../types';

export const DraggableTweet: React.FunctionComponent<{ tweet: Tweet }> = ({ tweet }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.Tweet,
    item: tweet,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Stack
      direction="row"
      sx={{
        px: 1.5,
        py: 1,
        border: 1,
        borderColor: 'grey.400',
        borderRadius: 1,
        backgroundColor: 'white',
        cursor: 'pointer',
        opacity: isDragging ? 0.4 : 1,
      }}
      ref={drag}
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
        <Typography variant="subtitle2">{tweet.text}</Typography>
      </Stack>
    </Stack>
  );
};
