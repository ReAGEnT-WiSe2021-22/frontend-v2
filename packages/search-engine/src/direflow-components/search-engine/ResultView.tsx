import {
    ReactiveList,
  } from '@appbaseio/reactivesearch';

import React from 'react'

const ResultView= () => {
    return (
        <div>
            <ReactiveList
              componentId='SearchResult'
              dataField='tweet'
              className='result-list'
              react={{
                and: [ 'partyFilter', 'mainSearch', 'dateFilter']
              }}
              pagination={true}
              paginationAt='bottom'
              pages={5}
              size={10}
              loader='Loading results...'
              onNoResults='No Results'
              showResultStats={true}
              renderResultStats={function(stats) {
                return `Showing ${stats.displayedResults} 
                of total ${stats.numberOfResults} in ${stats.time} ms`
              }}
            />
        </div>
    )
}

export default ResultView
  