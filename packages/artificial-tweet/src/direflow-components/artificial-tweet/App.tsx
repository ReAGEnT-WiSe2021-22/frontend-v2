import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Styled } from 'direflow-component';
import React from 'react';
import styles from './App.css';
import { Wrapper } from './components/wrapper';

const App: React.FunctionComponent = () => (
  <Styled styles={styles}>
    <Wrapper />
  </Styled>
);

export default App;
