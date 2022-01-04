import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import styles from './App.css';
//import Search from './Search';
import SearchField from './SearchBar';

const App: FC = () => (
  <Styled styles={styles}>
    <SearchField />
    
  </Styled>
);

export default App;
