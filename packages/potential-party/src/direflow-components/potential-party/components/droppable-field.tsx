import { Box, Typography } from '@mui/material';
import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../../const';

export const DroppableField: React.FunctionComponent<{ onDrop: any }> = ({ onDrop }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.Tweet,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = 'transparent';
  if (isActive) {
    backgroundColor = 'grey.300';
  } else if (canDrop) {
    backgroundColor = 'grey.200';
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px dashed',
        borderRadius: '0.5rem',
        borderColor: 'grey.400',
        backgroundColor,
        minWidth: 120,
      }}
      ref={drop}
      height={500}
    >
      <Typography variant="h6" sx={{ color: 'grey.400' }}>Drop a tweet here</Typography>
    </Box>
  );
};
