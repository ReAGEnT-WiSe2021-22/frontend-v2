import {
  Avatar,
  Box,
  Card,
  Typography,
} from '@mui/material';
import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../../const';
import { Tweet } from '../../../types';

interface DraggableTweetProps {
  tweet: Tweet
  isDropped: boolean
}

/**
 *
 * @param tweet Tweet object
 * @param isDropped boolean value whether object is dropped
 * @returns A Draggable Tweet View
 */
export const DraggableTweet: React.FC<DraggableTweetProps> = ({
  tweet,
  isDropped,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.Tweet,
    item: tweet,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Card
      sx={{
        display: 'flex',
        px: 1.5,
        py: 1,
        borderRadius: 1,
        cursor: 'pointer',
        opacity: isDragging ? 0.4 : 1,
        backgroundColor: isDropped ? 'azure' : 'white',
      }}
      ref={drag}
    >
      <Avatar sx={{ marginRight: '0.5rem' }}>{tweet.name.charAt(0)}</Avatar>
      <Box>
        <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{tweet.name}</Typography>
          <Typography variant="subtitle2" color="gray" sx={{ ml: 0.5 }}>
            @
            {tweet.username}
          </Typography>
        </Box>
        <Typography variant="subtitle2">
          {`${tweet.text} `}
          <span style={{ color: '#1DA1F2' }}>
            {tweet.hashtags && tweet.hashtags.map((hashtag) => `#${hashtag} `)}
          </span>
        </Typography>
      </Box>
    </Card>
  );
};
