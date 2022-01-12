import { Info } from '@mui/icons-material';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import RefreshIcon from '@mui/icons-material/Refresh';
import {
  Box,
  Button,
  Grid, Skeleton, Stack, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useFetch } from '../../../hooks/use-fetch';
import { Tweet } from '../../../types';
import { DraggableTweet } from './draggable-tweet';
import { DroppableField } from './droppable-field';
import { TweetDetails } from './tweet-details';

const Wrapper: React.FunctionComponent = ({ children }) => (
  <Stack padding={6}>
    {children}
  </Stack>
);

export const PotentialParty: React.FunctionComponent = () => {
  const { apiRequest } = useFetch();
  const [draggableTweets, setDraggableTweets] = useState<Tweet[]>([]);
  const [droppedTweet, setDroppedTweet] = useState<Tweet>();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getDraggableTweets = async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const response = await apiRequest('/api/potential-party');
      if (response.data) {
        setDraggableTweets(response.data.data);
      }
    } catch (e) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDraggableTweets();
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <Skeleton
          variant="rectangular"
          height={60}
          width={350}
          sx={{ marginBottom: 3 }}
        />
        <Stack direction="row">
          <Skeleton variant="rectangular" height={500} width={450} sx={{ marginRight: 3 }} />
          <Skeleton variant="rectangular" height={500} width={450} sx={{ marginRight: 3 }} />
          <Skeleton variant="rectangular" height={500} width={450} sx={{ marginRight: 3 }} />
        </Stack>
      </Wrapper>
    );
  }

  if (hasError) {
    return (
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
            <Typography variant="h5">
              Something went wrong.
            </Typography>
            <Button startIcon={<RefreshIcon />} sx={{ marginTop: 1 }} onClick={getDraggableTweets}>
              Click to try again
            </Button>
          </Box>
        </Stack>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Typography variant="h3" marginBottom={3}>Potential Party</Typography>
      {draggableTweets && draggableTweets.length <= 0 ? (
        <Stack direction="row" alignItems="center" spacing={1}>
          <Info fontSize="small" sx={{ color: 'gray' }} />
          <Typography variant="subtitle2">There are currently no tweets to show</Typography>
        </Stack>
      ) : (
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={4} sx={{ maxHeight: 512, overflow: 'auto' }}>
            <Stack direction="column" spacing={1} paddingBottom={1}>
              {draggableTweets && draggableTweets.map((tweet) => (
                <DraggableTweet
                  key={tweet.id}
                  tweet={tweet}
                  isDropped={tweet.id === droppedTweet?.id}
                />
              ))}
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <DroppableField onDrop={(item: any) => setDroppedTweet(item)} />
          </Grid>
          <Grid item xs={4}>
            <TweetDetails tweet={droppedTweet} onClear={() => setDroppedTweet(undefined)} />
          </Grid>
        </Grid>
      )}
    </Wrapper>
  );
};
