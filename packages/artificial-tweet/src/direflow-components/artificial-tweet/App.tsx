import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Styled } from 'direflow-component';
import React from 'react';
import styles from './App.css';
import { ArtificialTweet } from './components/artificial-tweet';

const App: React.FunctionComponent = () => (
  <Styled styles={styles}>
    <ArtificialTweet />
  </Styled>
);

export default App;
