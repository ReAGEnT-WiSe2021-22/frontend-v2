import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Party } from '../../../types';
import { CardLayout } from './card-layout';

export const Wrapper: React.FunctionComponent = () => {
  const [party, setParty] = useState<Party>(Party.parteilos);
  const [generatedTweet, setGeneratedTweet] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  const generateTweet = useCallback(() => {
    setGeneratedTweet('This is a tweet');
  }, []);

  return (
    <CardLayout title="Generate Tweet">
      <Box>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
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
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <TextField label="Keyword" variant="outlined" />
        </FormControl>
      </Box>
      {generatedTweet && (
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ mr: 1 }}>{generatedTweet}</Typography>
          <CopyToClipboard text={generatedTweet} onCopy={onCopyText}>
            {isCopied
              ? <CheckOutlinedIcon sx={{ color: 'gray' }} />
              : <ContentCopyIcon sx={{ cursor: 'pointer', color: 'gray' }} />}
          </CopyToClipboard>
        </Box>
      )}
      <Button variant="contained" color="primary" onClick={generateTweet} sx={{ mt: 2 }}>Generate</Button>
    </CardLayout>
  );
};
