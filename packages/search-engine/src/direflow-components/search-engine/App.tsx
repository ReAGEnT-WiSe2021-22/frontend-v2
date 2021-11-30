import { Styled } from 'direflow-component';
import React from 'react';
import { useFetch } from '../../hooks/use-fetch';
import styles from './App.css';

export interface Tweet {
  id: number
  text: string
}

const App: React.FunctionComponent = () => {
  const [tweets, setTweets] = React.useState<Tweet[]>();
  const { fetchApi } = useFetch();

  React.useEffect(() => {
    fetchApi('api/search-tweets')
      .then((res) => res.json())
      .then((json) => setTweets(json.tweets));
  }, [fetchApi]);

  return (
    <Styled styles={styles}>
      <div className="app">
        {tweets && tweets.map((tweet) => (
          <div key={tweet.id}>
            <span style={{ marginRight: '1rem' }}>{tweet.id}</span>
            <span>{tweet.text}</span>
          </div>
        ))}
      </div>
    </Styled>
  );
};

export default App;
