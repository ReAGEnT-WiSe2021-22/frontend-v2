import React from 'react';
import { Styled } from 'direflow-component';
import { EnvironmentProvider } from '../../hooks/useEnvironment';

import APIWrapper from './components/APIWrapper';
import styles from './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const App = (): JSX.Element => (
  <Styled styles={styles}>
    <EnvironmentProvider>
      <APIWrapper />
    </EnvironmentProvider>
  </Styled>
);

export default App;
