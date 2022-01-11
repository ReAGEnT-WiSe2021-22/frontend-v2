import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Home.css';

const Home = ({ wiki }: {wiki: string}): JSX.Element => (
  <div className="home p-12">
    <ReactMarkdown>
      {wiki}
    </ReactMarkdown>
  </div>
);

export { Home };
