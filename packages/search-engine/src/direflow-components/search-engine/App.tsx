import React, { FC } from 'react';
import styles from './App.css';
import { Styled } from 'direflow-component'
import { ReactiveBase, DataSearch, DateRange, MultiDataList } from '@appbaseio/reactivesearch';

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
      value: 'Grüne',
  },
  {
    label: 'Linke',
    value: 'Linke',
  },
]

const App: FC = () => {
  return (
    <Styled styles={styles}>
    <ReactiveBase
          app="search-engine"
          url="http://twint.f4.htw-berlin.de:9200/"
          enableAppbase
          

          theme={{
            typography: {
               fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',fontSize: "16px"
            },
            colors: {
                  textColor: "#fff",
                  backgroundColor: "#212121",
                  primaryTextColor: "#fff",
                  primaryColor: "#2196F3",
                  titleColor: "#fff",
                  alertColor: "#d9534f",
                  borderColor: "#666"
            }
          }}
    >
      
      <div className="navbar">
        <div className="logo-container">
        
        </div>
         
        <div className="search-container">
          <DataSearch            
            componentId="mainSearch"            
            dataField={["party","party.search", "tweets", "tweets.search"]}                      
            className="search-bar"            
            queryFormat="and"            
            placeholder="Search here..."
            innerClass={{
              "input": "searchbox",
              "list": "suggestionlist"
            }}                  
          />
        </div>
      </div>
      
      
      
      <div className="left-bar">
        <div>
          <div className="filter-heading center">
            <b>
              {" "}
              <i className="fa fa-calendar" /> Party Filter{" "}
            </b>
          </div> 

          <MultiDataList
              componentId="party-list"
              dataField="party"
              data={partyNames}
              queryFormat="or"
              selectAllLabel="All Party"
              showCheckbox={true}
              showSearch={true}
              placeholder="Search for a party"
              react={{
                and: [
                  "mainSearch",
                  "results",
                  "date-filter",
                ]
              }}
    
          />

            
          <hr className="blue" />

          <div className="filter-heading center">
            <b>
              {" "}
              <i className="fa fa-calendar" /> Tweet Date{" "}
            </b>
          </div>
          <DateRange
            componentId="date-filter"
            dataField="Tweet_date"
            className="datePicker"
          />
        </div>
      </div>
    
    </ReactiveBase>
    </Styled>
  );
};

export default App;
