import { Box } from '@mui/material'
import React from 'react'
import { Tweet } from '../Tweet'
import ResultCard from './ResultCard'

const ResultView: React.FunctionComponent<{data: any}> = ({ data }) => {
    return (
        <div>
            <Box sx={{ margin: '5px'}}>
                {data.length!==0 ? 
                data.map((tweet: Tweet) => (<ResultCard tweet={tweet} key={tweet.id}/>)) 
                : "No Results"}
            </Box>
            
        </div>
    )
}

export default ResultView
