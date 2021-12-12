import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { GeneratedTweet, Party } from '../../../types';
import { useFetch } from '../hooks/use-fetch';
import { CardLayout } from './card-layout';
import { Tweet } from './tweet';

export const Wrapper: React.FunctionComponent = () => {
  const { apiRequest } = useFetch();
  const [party, setParty] = useState<Party>(Party.parteilos);
  const [generatedTweet, setGeneratedTweet] = useState<GeneratedTweet>();

  const generateTweet = async () => {
    try {
      const response = await apiRequest('/api/artificial-tweets');
      if (response.data) {
        setGeneratedTweet(response.data.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <CardLayout title="Generate Tweet">
      <Box sx={{ mb: 2 }}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Party</InputLabel>
          <Select
            value={party}
            label="Party"
            onChange={(event: SelectChangeEvent) => setParty(event.target.value as Party)}
          >
            {Object.entries(Party).map(([key, value]) => (
              <MenuItem key={key} value={value}>{value}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ ml: 1, minWidth: 120 }}>
          <TextField label="Keyword" variant="outlined" />
        </FormControl>
      </Box>
      {generatedTweet && (
        <Tweet tweet={generatedTweet} />
      )}
      <Button variant="contained" color="primary" onClick={generateTweet} sx={{ mt: 2 }}>Generate</Button>
    </CardLayout>
  );
};
