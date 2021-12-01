import React from 'react';
import { Styled } from 'direflow-component';
import { EnvironmentProvider } from '../../hooks/useEnvironment';

import MockClient from './components/mock-client';
import styles from './App.css';

const App = (): JSX.Element => (
  <Styled styles={styles}>
    <EnvironmentProvider>
      <MockClient />
    </EnvironmentProvider>
  </Styled>
);

export default App;
