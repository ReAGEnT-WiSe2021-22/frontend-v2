import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import styles from './App.css';
import SearchField from './SearchField';

const App: FC = () => (
  <Styled styles={styles}>
    <SearchField />
  </Styled>
);

export default App;
