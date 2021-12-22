import { Stack, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { Tweet } from '../../../types';
import { useFetch } from '../../../hooks/use-fetch';
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
      <Stack direction="row" spacing={2}>
        <Stack direction="column" spacing={1}>
          {draggableTweets && draggableTweets.map((tweet) => (
            <DraggableTweet key={tweet.id} tweet={tweet} />
          ))}
        </Stack>
        <DroppableField onDrop={(item: any) => setDroppedTweet(item)} />
        {droppedTweet && <TweetDetails tweet={droppedTweet} />}
      </Stack>
    </Stack>
  );
};
