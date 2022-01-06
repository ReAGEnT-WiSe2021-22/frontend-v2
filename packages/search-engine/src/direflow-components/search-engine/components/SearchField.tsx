import SearchBar from "material-ui-search-bar"
import React, { useState } from "react";
import ResultCard from "./ResultCard";


const SearchField: React.FunctionComponent = () => { 
    const [value, setValue] = useState('')
    const [data, setData] = useState([])

    const search = (value: string) => {
        const url = "http://twint.f4.htw-berlin.de:8080/tweets/_search?pretty"
        const data = {
        "query": {
            "bool": {
            "must": [
                { "match_phrase": { "tweet": value  }}
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
            // .then((data) => console.log('This is your data', 
            //     data.hits.hits.map((d: { _source: { partei: any; name: any; username: any; tweet: any; }; }) => 
            //     ( {partei: d._source.partei, name: d._source.name, username: d._source.username, tweet: d._source.tweet }) )));
            .then((data) => setData(data.hits.hits.map((d: { _source: { partei: any; name: any; username: any; tweet: any; }; }) => 
                ( {partei: d._source.partei, name: d._source.name, username: d._source.username, tweet: d._source.tweet }) )));
    }

    return (
        <>
            <SearchBar
                value={value}
                onChange={(newValue) =>setValue(newValue)}
                onRequestSearch={() => search(value)} 
            />

            <ResultCard tweet={{
                partei: 'CDU',
                name: 'Bob',
                username: 'bob',
                tweet: 'I hate covid'
            }} />

            {data.map((x) => (<ResultCard tweet={x}/>))}
        </>
    )
    
}

export default SearchField;