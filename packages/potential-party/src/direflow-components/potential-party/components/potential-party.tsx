import { Info } from '@mui/icons-material';
import { Grid, Stack, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useFetch } from '../../../hooks/use-fetch';
import { Tweet } from '../../../types';
import { DraggableTweet } from './draggable-tweet';
import { DroppableField } from './droppable-field';
import { TweetDetails } from './tweet-details';

export const PotentialParty: React.FunctionComponent = () => {
  const { apiRequest } = useFetch();
  const [draggableTweets, setDraggableTweets] = useState<Tweet[]>([]);
  const [droppedTweet, setDroppedTweet] = useState<Tweet>();

  const getDraggableTweets = useCallback(async () => {
    try {
      const response = await apiRequest('/api/potential-party');
      if (response.data) {
        setDraggableTweets(response.data.data);
      }
    } catch (e) {
      console.error(e);
    }
  }, [apiRequest]);

  useEffect(() => {
    getDraggableTweets();
  }, []);

  return (
    <Stack padding={6}>
      <Typography variant="h3" marginBottom={4}>Potential Party</Typography>
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
          <Grid item xs={4} sx={{ maxHeight: 600, overflow: 'auto' }}>
            <Stack direction="column" spacing={1}>
              {draggableTweets && draggableTweets.map((tweet) => (
                <DraggableTweet key={tweet.id} tweet={tweet} />
              ))}
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <DroppableField onDrop={(item: any) => setDroppedTweet(item)} />
          </Grid>
          <Grid item xs={4}>
            <TweetDetails tweet={droppedTweet} />
          </Grid>
        </Grid>
      )}
    </Stack>
  );
};
