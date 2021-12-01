import React, { useEffect } from 'react';

const MockClient = (): JSX.Element => {
  const fetchData = async () => {
    try {
      const req = await fetch('/api/party-reputation');
      const json = await req.json();

      console.log(json);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      Hello, world!
    </div>
  );
};

export default MockClient;
