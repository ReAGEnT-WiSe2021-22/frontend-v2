import React from 'react';


class Search extends React.Component {
  componentDidMount() {
    const url = "http://twint.f4.htw-berlin.de:8080/tweets/_search?pretty"
    const data = {
      "query": {
        "bool": {
          "must": [
            { "match": { "partei":{"query": "CDU SPD","operator": "or"}}},
            { "match_phrase": { "tweet":"ein Test"}}
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
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h2>app has Mounted, Check the browser 'console' </h2>;
  }
}

export default Search;