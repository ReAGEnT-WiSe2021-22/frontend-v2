import React from 'react';
import { useState } from 'react';

const Search = ({  }) => {
    const url = "http://twint.f4.htw-berlin.de:8080/tweets/_search?pretty"
    const data = {
        "query": {
            "bool": {
            "must": [
                { "match_phrase": { "tweet": "test" }}
            ]
            }
        },
        "sort": [
                {
                "date": "desc"
                }
            ]
    }

    fetch(url, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((data) => console.log('This is your data', 
            data.hits.hits.map((d: { _source: { partei: any; name: any; username: any; tweet: any; }; }) => 
            ( {partei: d._source.partei, name: d._source.name, username: d._source.username, tweet: d._source.tweet }) )));
}

Search.defaultProps = {
    value: ''
}

export default Search;