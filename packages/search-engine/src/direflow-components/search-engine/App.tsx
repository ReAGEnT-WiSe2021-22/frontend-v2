import { Styled } from 'direflow-component';
import React, { FC } from 'react';
import {
  ReactiveBase, DataSearch, 
  MultiDataList, DateRange,
} from '@appbaseio/reactivesearch';
import styles from './App.css';
import ResultView from './ResultView';

const partyNames = [
  {
    label: 'CDU',
    value: 'CDU',
  },
  {
    label: 'AFD',
    value: 'AFD',
  },
  {
    label: 'Grüne',
    value: 'Gruene',
  },
  {
    label: 'Linke',
    value: 'Linke',
  },
];

const App: FC = () => (
  <Styled styles={styles}>
    <ReactiveBase
      app="tweets"
      url="http://twint.f4.htw-berlin.de:8080/"
      enableAppbase={false}

      theme={{
        typography: {
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif', fontSize: '16px',
        },
        colors: {
          textColor: '#fff',
          backgroundColor: '#212121',
          primaryTextColor: '#fff',
          primaryColor: '#2196F3',
          titleColor: '#fff',
          alertColor: '#d9534f',
          borderColor: '#666',
        },
      }}
    >

      <div className="navbar">

        <div className="logo-container" />

        <div className="search-container">
          <DataSearch
            componentId="mainSearch"
            dataField={['partei', 'tweet']}
            className="search-bar"
            queryFormat="and"
            placeholder="Search here..."
            innerClass={{
              input: 'searchbox',
              list: 'suggestionlist',
            }}
          />
        </div>
      </div>

      <div className='res-container'>
        <div className="left-bar">
          <div>
            <div className="filter-heading center">
              <b>
                {' '}
                <i className="fa fa-calendar" />
                {' '}
                Party Filter
                {' '}
              </b>
            </div>

            <MultiDataList
              componentId="partyList"
              dataField="partei"
              data={partyNames}
              queryFormat="or"
              selectAllLabel="All Party"
              showCheckbox
              showSearch
              placeholder="Search for a party"
              react={{
                and: [
                  'mainSearch',
                  'results',
                ],
              }}
            />

            <hr className="blue" />

            <div className="filter-heading center">
              <b>
                {' '}
                <i className="fa fa-calendar" />
                {' '}
                Date Filter
                {' '}
              </b>
            </div>

            <DateRange
              componentId="dateFilter"
              dataField="date"
              className="datePicker"
            />
          </div>
        </div>

        <div className='result-list'>
            <ResultView />
        </div>
      </div>
      

    </ReactiveBase>
  </Styled>
);

export default App;
