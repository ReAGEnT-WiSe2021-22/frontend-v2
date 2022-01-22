import React from 'react';
import ReactMarkdown from 'react-markdown';
import './Home.css';

/**
 *
 * @param wiki Wiki markdown data.
 * @see {@link https://github.com/ReAGEnT-WiSe2021-22/Wiki} for Wiki repo.
 * @returns Wiki in JSX Element.
 */
const Home = ({ wiki }: { wiki: string }): JSX.Element => (
  <div className="home p-12">
    <ReactMarkdown>
      {wiki}
    </ReactMarkdown>
  </div>
);

export { Home };
