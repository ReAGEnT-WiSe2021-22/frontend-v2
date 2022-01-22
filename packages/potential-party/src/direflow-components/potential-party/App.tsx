import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Styled } from 'direflow-component';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './App.css';
import { PotentialParty } from './components/potential-party';

const App: React.FC = () => (
  <DndProvider backend={HTML5Backend}>
    <Styled styles={styles}>
      <PotentialParty />
    </Styled>
  </DndProvider>
);

export default App;
