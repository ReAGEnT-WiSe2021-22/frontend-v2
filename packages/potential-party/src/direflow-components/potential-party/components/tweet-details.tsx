import React from 'react';
import { Tweet } from '../../../types';

export const TweetDetails: React.FunctionComponent<{ tweet: Tweet }> = ({ tweet }) => (
  <div><pre>{JSON.stringify(tweet, null, 2)}</pre></div>
);
