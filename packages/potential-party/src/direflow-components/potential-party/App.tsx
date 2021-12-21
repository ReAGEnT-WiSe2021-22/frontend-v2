import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Styled } from 'direflow-component';
import React from 'react';
import styles from './App.css';
import { PotentialParty } from './components/potential-party';

const App: React.FunctionComponent = () => (
  <Styled styles={styles}>
    <PotentialParty />
  </Styled>
);

export default App;
