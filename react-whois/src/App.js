import React, { useState, useEffect } from 'react';

import './App.css';

const App = () => {
  const [domain, setDomain] = useState('');
  const [domainData, setDomainData] = useState({});

  const url = `https://otx.alienvault.com/otxapi/indicator/domain/whois/${domain}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(domain);
    fetchData();
  };

  const fetchData = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    console.log(responseJSON);
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='domain'>Domain : </label>
          <input
            type='text'
            id='domain'
            name='domain'
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default App;
