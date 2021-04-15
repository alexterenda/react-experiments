import React, { useState, useEffect } from 'react';

import Table from './components/table/table.js';
import Form from './components/form/form.js';

import './App.css';

const App = () => {
  const [domain, setDomain] = useState('');
  const [domainData, setDomainData] = useState([]);

  const url = `https://otx.alienvault.com/otxapi/indicator/domain/whois/${domain}`;
  const domainRegex = `/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g`;

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData();
  };

  const fetchData = async () => {
    const response = await fetch(url);
    const responseObject = await response.json();
    setDomainData(responseObject['data']);
    console.log(domainData);
  };

  return (
    <div>
      <Form handleSubmit={handleSubmit} domain={domain} setDomain={setDomain} />

      {domainData !== [] && <Table domainData={domainData} />}
    </div>
  );
};

export default App;
