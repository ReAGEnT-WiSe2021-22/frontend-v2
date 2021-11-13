import { Styled } from 'direflow-component'
import React, { FC } from 'react'
import styles from './App.css'

export interface Tweet {
  id: number
  text: string
}

const App: FC = () => {
  const [tweets, setTweets] = React.useState<Tweet[]>()

  React.useEffect(() => {
    fetch("api/search-tweets")
      .then(res => res.json())
      .then(json => setTweets(json.tweets))
  }, [])

  return (
    <Styled styles={styles}>
      <div className='app'>
        {tweets && tweets.map(tweet => <div key={tweet.id}>
          <span style={{ marginRight: '1rem' }}>{tweet.id}</span>
          <span>{tweet.text}</span>
        </div>)}
      </div>
    </Styled>
  )
}

export default App
