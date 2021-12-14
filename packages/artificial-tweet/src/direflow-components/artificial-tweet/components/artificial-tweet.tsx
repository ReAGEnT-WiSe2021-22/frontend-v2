import {
  Box,
  Button,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { GeneratedTweet, Party } from '../../../types';
import { useFetch } from '../hooks/use-fetch';
import { MultiInputField } from './fields/multi-input-field';
import { SelectField } from './fields/select-field';
import { Tweet } from './tweet';

export const ArtificialTweet: React.FunctionComponent = () => {
  const { apiRequest } = useFetch();
  const [party, setParty] = useState<Party>(Party.parteilos);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [generatedTweets, setGeneratedTweets] = useState<GeneratedTweet[]>([]);

  const generateTweet = async () => {
    try {
      const response = await apiRequest('/api/artificial-tweets');
      if (response.data) {
        setGeneratedTweets([...generatedTweets, response.data.data]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Stack padding={6}>
      <Typography variant="h3" marginBottom={4}>Generate Tweet</Typography>
      <Box sx={{ mb: 4 }}>
        <SelectField
          sx={{ minWidth: 120 }}
          label="Party"
          value={party}
          options={Party}
          onChange={(event: SelectChangeEvent) => setParty(event.target.value as Party)}
        />
        <MultiInputField
          sx={{ mt: 2, minWidth: 120 }}
          label="Keyword"
          placeholder="Enter keyword..."
          values={keywords}
          onChange={(newKeywords) => setKeywords(newKeywords)}
        />
      </Box>
      <Button
        sx={{ mb: 4 }}
        variant="contained"
        color="primary"
        onClick={generateTweet}
        disabled={keywords.length < 1}
      >
        Generate
      </Button>
      {generatedTweets && generatedTweets.map((generatedTweet) => (
        <Tweet tweet={generatedTweet} />
      ))}
    </Stack>
  );
};
