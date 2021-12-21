import {
  Button,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useWindowSize } from '@vramework/hooks/dist/use-screen-size';
import { GeneratedTweet, Party } from '../../../types';
import { useFetch } from '../hooks/use-fetch';
import { SelectField } from './fields/select-field';
import { CustomTextField } from './fields/text-field';
import { Tweet } from './tweet';

export const ArtificialTweet: React.FunctionComponent = () => {
  const { apiRequest } = useFetch();
  const [party, setParty] = useState<Party>(Party.parteilos);
  const [promptText, setPromptText] = useState<string>('');
  const [generatedTweets, setGeneratedTweets] = useState<GeneratedTweet[]>([]);
  const { width } = useWindowSize();

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
      <Stack direction={width > 1024 ? 'row' : 'column'} sx={{ mb: 4 }}>
        <SelectField
          sx={{ minWidth: 120 }}
          label="Party"
          value={party}
          options={Party}
          onChange={(event: SelectChangeEvent) => setParty(event.target.value as Party)}
        />
        <CustomTextField
          sx={width > 1024 ? { ml: 2, width: '100%' } : { mt: 2, width: '100%' }}
          label="Text"
          placeholder="Enter text..."
          value={promptText}
          onChange={(text: string) => setPromptText(text)}
        />
      </Stack>
      <Button
        sx={{ mb: 4 }}
        variant="contained"
        color="primary"
        onClick={generateTweet}
        disabled={!promptText}
      >
        Generate
      </Button>
      {generatedTweets && generatedTweets.map((generatedTweet) => (
        <Tweet tweet={generatedTweet} />
      ))}
    </Stack>
  );
};
