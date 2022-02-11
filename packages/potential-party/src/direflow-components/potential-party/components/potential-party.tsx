import { Info } from '@mui/icons-material';
import {
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useFetch } from '../../../hooks/use-fetch';
import { Tweet } from '../../../types';
import { DraggableTweet } from './draggable-tweet';
import { DroppableField } from './droppable-field';
import { Error } from './error';
import { Loading } from './loading';
import { TweetDetails } from './tweet-details';
import { Wrapper } from './wrapper';

/**
 *
 * @returns Potential Party View.
 * View will be separated into 3 different columns:
 * First column will show a list of Tweets.
 * Second columnn will show a droppable field.
 * Third column will show a detailed Tweet object.
 */
export const PotentialParty: React.FC = () => {
  const { apiRequest } = useFetch();
  const [draggableTweets, setDraggableTweets] = useState<Tweet[]>([]);
  const [droppedTweet, setDroppedTweet] = useState<Tweet>();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  /**
   *
   * Fetch Array of Tweet objects from API.
   */
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

  /**
   *
   * Call function when component is mounted.
   */
  useEffect(() => {
    getDraggableTweets();
  }, []);

  /**
   *
   * Show Loading component on loading.
   */
  if (isLoading) {
    return <Loading />;
  }

  /**
   *
   * Show Error component on error
   */
  if (hasError) {
    return (
      <Error
        message="Something went wrong!"
        onClick={getDraggableTweets}
      />
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
          style={{ maxWidth: 'calc(100vw - 6rem)' }}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid
            item
            xs={4}
            sx={{
              maxHeight: 512,
              overflow: 'auto',
              maxWidth: '33%',
            }}
          >
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
          <Grid item xs={4} sx={{ maxWidth: '33%' }}>
            <DroppableField onDrop={(item: any) => setDroppedTweet(item)} />
          </Grid>
          <Grid item xs={4} sx={{ maxWidth: '33%' }}>
            <TweetDetails tweet={droppedTweet} onClear={() => setDroppedTweet(undefined)} />
          </Grid>
        </Grid>
      )}
    </Wrapper>
  );
};
