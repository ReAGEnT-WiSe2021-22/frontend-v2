import { Box, FormControlLabel, Checkbox, Typography } from "@mui/material";
import SearchBar from "material-ui-search-bar"
import React, { useState } from "react";
import { Tweet } from "../Tweet";
import ResultView from "./ResultView";
import { Divider } from "@material-ui/core";

const SearchField: React.FunctionComponent = () => { 
    const [value, setValue] = useState('')
    const [data, setData] = useState([])
    const [party, setParty] = useState(['CDU', 'SPD', 'AfD', 'Linke', 'CSU', 'FDP', 'B90', 'Parteilos' ])
    const [checked1, setChecked1] = React.useState([true, false])
    const [checked2, setChecked2] = React.useState([true, false])
    const [checked3, setChecked3] = React.useState([true, false])
    const [checked4, setChecked4] = React.useState([true, false])
    const [checked5, setChecked5] = React.useState([true, false])
    const [checked6, setChecked6] = React.useState([true, false])
    const [checked7, setChecked7] = React.useState([true, false])
    const [checked8, setChecked8] = React.useState([true, false])

    const handleChecked1 = (event: { target: { checked: boolean; }; }, partyName: string) => {
        setChecked1([event.target.checked, checked1[1]]);
        if (!party.includes(partyName)){
          const newParties = [...party, partyName]
          setParty(newParties)
        } else {
          const newParties = party.filter(item => item !== partyName)
          setParty(newParties)
        }
      };
    
    const handleChecked2 = (event: { target: { checked: boolean; }; }, partyName: string) => {
      setChecked2([event.target.checked, checked2[1]]);
      if (!party.includes(partyName)){
        const newParties = [...party, partyName]
        setParty(newParties)
      } else {
        const newParties = party.filter(item => item !== partyName)
        setParty(newParties)
      }
    };
    const handleChecked3 = (event: { target: { checked: boolean; }; }, partyName: string) => {
      setChecked3([event.target.checked, checked3[1]]);
      if (!party.includes(partyName)){
        const newParties = [...party, partyName]
        setParty(newParties)
      } else {
        const newParties = party.filter(item => item !== partyName)
        setParty(newParties)
      }
    };
    const handleChecked4 = (event: { target: { checked: boolean; }; }, partyName: string) => {
      setChecked4([event.target.checked, checked4[1]]);
      if (!party.includes(partyName)){
        const newParties = [...party, partyName]
        setParty(newParties)
      } else {
        const newParties = party.filter(item => item !== partyName)
        setParty(newParties)
      }
    };
    const handleChecked5 = (event: { target: { checked: boolean; }; }, partyName: string) => {
      setChecked5([event.target.checked, checked5[1]]);
      if (!party.includes(partyName)){
        const newParties = [...party, partyName]
        setParty(newParties)
      } else {
        const newParties = party.filter(item => item !== partyName)
        setParty(newParties)
      }
    };
    const handleChecked6 = (event: { target: { checked: boolean; }; }, partyName: string) => {
      setChecked6([event.target.checked, checked6[1]]);
      if (!party.includes(partyName)){
        const newParties = [...party, partyName]
        setParty(newParties)
      } else {
        const newParties = party.filter(item => item !== partyName)
        setParty(newParties)
      }
    }; 
    const handleChecked7 = (event: { target: { checked: boolean; }; }, partyName: string) => {
      setChecked7([event.target.checked, checked7[1]]);
      if (!party.includes(partyName)){
        const newParties = [...party, partyName]
        setParty(newParties)
      } else {
        const newParties = party.filter(item => item !== partyName)
        setParty(newParties)
      }
    };
    const handleChecked8 = (event: { target: { checked: boolean; }; }, partyName: string) => {
      setChecked8([event.target.checked, checked8[1]]);
      if (!party.includes(partyName)){
        const newParties = [...party, partyName]
        setParty(newParties)
      } else {
        const newParties = party.filter(item => item !== partyName)
        setParty(newParties)
      }
    }; 
    

    const partyCheckBox = (
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            padding: '3px',
            paddingLeft: '10px', 
            border: 3,
            borderRadius: 2, 
            borderColor: 'rgba(25, 118, 210, 0.75)' 
          }}>
          <Typography sx={{ fontSize: 17, textAlign: 'center'}}>
            Party Filter
          </Typography>
          <Divider />
          <FormControlLabel
            label="CDU"
            control={<Checkbox checked={checked1[0]} onChange={e => handleChecked1(e, 'CDU')}/>}
          />
          <FormControlLabel
            label="SPD"
            control={<Checkbox checked={checked2[0]} onChange={e => handleChecked2(e, 'SPD')}/>}
          />
          <FormControlLabel
            label="AfD"
            control={<Checkbox checked={checked3[0]} onChange={e => handleChecked3(e, 'AfD')}/>}
          />
          <FormControlLabel
            label="CSU"
            control={<Checkbox checked={checked4[0]} onChange={e => handleChecked4(e, 'CSU')}/>}
          />
          <FormControlLabel
            label="Linke"
            control={<Checkbox checked={checked5[0]} onChange={e => handleChecked5(e, 'Linke')}/>}
          />
          <FormControlLabel
            label="B90"
            control={<Checkbox checked={checked6[0]} onChange={e => handleChecked6(e, 'B90')}/>}
          />
          <FormControlLabel
            label="FDP"
            control={<Checkbox checked={checked7[0]} onChange={e => handleChecked7(e, 'FDP')}/>}
          />
          <FormControlLabel
            label="Parteilos"
            control={<Checkbox checked={checked8[0]} onChange={e => handleChecked8(e, 'Parteilos')}/>}
          />
          
        </Box>
      );

    const search = (value: string) => {
        const url = "http://twint.f4.htw-berlin.de:8080/tweets/_search?pretty"
        const data = {
        "query": {
            "bool": {
            "must": [
              { "match": { "partei":{"query": party.join(' ') ,"operator": "or"}}},
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
            .then((data) => {
              setData(data.hits.hits.map((d: { _source: { id: any; partei: any; name: any; username: any; tweet: any; }; }) => 
                ( {id: d._source.id, partei: d._source.partei, name: d._source.name, username: d._source.username, tweet: d._source.tweet }) as Tweet ));
              console.log(data)
            });
    }

    return (
        <>
          <SearchBar
                value={value}
                onChange={(newValue) =>setValue(newValue)}
                onRequestSearch={() => search(value)} 
          />
          <Box sx={{ display: 'flex', margin: '5px', alignItems: 'flex-start' }}>
            {partyCheckBox}

            <ResultView data={data}/>
          </Box>
        </>
            
            
       
    )
    
}

export default SearchField;