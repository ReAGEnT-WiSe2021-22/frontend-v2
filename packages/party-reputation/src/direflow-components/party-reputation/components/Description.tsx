import { Stack, Typography } from '@mui/material';
import React from 'react';

const Description = (): JSX.Element => (
  <Stack paddingTop={2} maxWidth="80vw">
    <Typography variant="body1">
      In this page, we try to analyse the reputation of each parties using
      sentiment analysis. Sentiment analysis is a method to identify and
      quantify the affective state and subjective information provided using a
      bunch of machine learning techniques (such as NLP, text analysis and many
      others). We analyse a lot of tweets related to each parties that
      participate on the German Election and try to quantify the sentiment of
      the citizen toward it on a given date.
      <br />
      The sentiment analysis basically generates a number that represents
      the sentiment toward the parties itself (in our case, between 0 and 5).
      We want to make it easier to analyse the generated data. Therefore, we
      draw a line chart to visualise it in the browser.
    </Typography>
    <Typography variant="body1" marginTop={2}>
      Below is the generated sentiment for all parties between .. and ...
      Please click on one of the party name button above, to display
      the sentiment analysis for a specific party.
    </Typography>
  </Stack>
);

export default Description;
