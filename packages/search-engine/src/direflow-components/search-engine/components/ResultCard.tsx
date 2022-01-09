import * as React from 'react';
import {Avatar, 
        Box,
        Card,
        Typography,
        CardContent,
} from '@mui/material'
import { Tweet } from '../Tweet';

const ResultCard: React.FunctionComponent<{ tweet: Tweet }> = ({ tweet }) => {
    return (
    <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Box sx={{ display: 'inline-flex', alignItems: 'center', borderColor: '5px lightblue' }}>
                <Avatar sx={{ marginRight: '0.5rem' }}>
                    {tweet.name.charAt(0)}
                </Avatar>
                <Typography variant="h5" component="div">
                    {tweet.name}
                </Typography>
                <Typography sx={{ ml: 1, marginTop: 0.35 }} color="text.secondary">
                    @{tweet.username}
                </Typography>
            </Box>
            <Typography variant="body2" sx={{ margin: '0.5rem', marginLeft: '3.1rem' }}>
                {tweet.tweet}
            </Typography>
        </CardContent>
    </Card>
    );
}

export default ResultCard