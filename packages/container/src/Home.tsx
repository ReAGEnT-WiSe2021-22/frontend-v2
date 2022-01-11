import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Home.css';

const Home = ({ wiki }: {wiki: string}): JSX.Element => (
  <div className="home">
    <ReactMarkdown>
      {wiki}
    </ReactMarkdown>
  </div>
);

export { Home };
