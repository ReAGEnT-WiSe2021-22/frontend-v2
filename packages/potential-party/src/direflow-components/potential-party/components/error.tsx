import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import RefreshIcon from '@mui/icons-material/Refresh';
import {
  Box,
  Button,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { Wrapper } from './wrapper';

interface ErrorProps {
  message: string
  onClick: () => void
}

/**
 *
 * @param message Error message.
 * @param onClick Void Function to be called on click.
 * @returns An Error View.
 */
export const Error: React.FC<ErrorProps> = ({ message, onClick }) => (
  <Wrapper>
    <Stack
      direction="row"
      alignItems="flex-start"
      spacing={2}
      paddingX={3}
      paddingY={2}
      sx={{
        borderRadius: 4,
      }}
    >
      <PriorityHighIcon sx={{ marginTop: 0.75, fontSize: 40 }} />
      <Box>
        <Typography variant="h4">Oops!</Typography>
        <Typography variant="h5">{message}</Typography>
        <Button
          startIcon={<RefreshIcon />}
          sx={{ marginTop: 1 }}
          onClick={onClick}
        >
          Click to try again
        </Button>
      </Box>
    </Stack>
  </Wrapper>
);
