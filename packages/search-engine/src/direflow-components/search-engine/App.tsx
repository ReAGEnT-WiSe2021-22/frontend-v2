import { Styled } from 'direflow-component'
import styles from './App.css';
import React, { FC } from 'react';
import { ReactiveBase, DataSearch, DateRange, 
  MultiDataList, ReactiveList } 
  from '@appbaseio/reactivesearch';

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
]

const App: FC = () => {
  return (
    <Styled styles={styles}>
    <ReactiveBase
          app="tweets"
          url="http://twint.f4.htw-berlin.de:9200/"
          enableAppbase={false}
          

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
            dataField={["partei", "tweet"]}                      
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
      
      <div className="res-container">
        <div className="left-bar">
          <div>
            <div className="filter-heading center">
              <b>
                {" "}
                <i className="fa fa-calendar" /> Party Filter{" "}
              </b>
            </div> 

            <MultiDataList
                componentId="party-filter"
                dataField="partei"
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

            {/* <div className="filter-heading center">
              <b>
                {" "}
                <i className="fa fa-calendar" /> Tweet Date{" "}
              </b>
            </div>
            <DateRange
              componentId="date-filter"
              dataField="Tweet_date"
              className="datePicker"
            /> */}
          </div>
        </div>
        
        <div className="result-list">
          <ReactiveList
            componentId="SearchResult"
            dataField="tweet"
            className="result-list"
            react={{
                and: ['party-filter', 'mainSearch'],
            }}
            renderItem={res => <div>{res.tweets}</div>}
            pagination={true}
            paginationAt="bottom"
            pages={5}
            size={10}
            loader="Loading Results.."
            onNoResults={"No results..."}
            showResultStats={true}
            renderResultStats={function(stats) {
              return `Showing ${stats.displayedResults} of total ${stats.numberOfResults} in ${
                  stats.time
              } ms`;
            }}
          />
        </div>
        
      </div>
      
      
      
    </ReactiveBase>
    </Styled>
  );
};

export default App;
