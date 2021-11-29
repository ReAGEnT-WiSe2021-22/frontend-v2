import React from 'react';
import { Styled } from 'direflow-component';
import { Button } from '@mui/material';
import styles from './App.css';

interface IProps {
  componentTitle: string;
  sampleList: string[];
}

const App = ({ sampleList = [], componentTitle = 'Party Reputation' }: IProps): JSX.Element => {
  const renderSampleList = sampleList.map((sample: string) => (
    <div key={sample} className="sample-text">
      →
      {' '}
      {sample}
    </div>
  ));

  return (
    <Styled styles={styles}>
      <div className="app">
        <div className="top">
          <div className="header-image" />
        </div>
        <div className="bottom">
          <div className="header-title">{componentTitle}</div>
          <div>{renderSampleList}</div>
          <Button>
            Click
          </Button>
        </div>
      </div>
    </Styled>
  );
};

export default App;
