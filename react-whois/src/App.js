import React, { useState, useEffect } from 'react';

import './App.css';

const App = () => {
  const [domain, setDomain] = useState('');
  const [domainData, setDomainData] = useState([]);

  const url = `https://otx.alienvault.com/otxapi/indicator/domain/whois/${domain}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    const response = await fetch(url);
    const responseObject = await response.json();
    setDomainData(responseObject['data']);
  };

  useEffect(() => {
    if (domain !== '') {
      fetchData();
    }
  }, []);

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
      <table>
        <thead>
          <tr>
            <th>Record</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {/* Only using index as key to remove error and no CRUD operations involved */}

          {domainData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item['name']}</td>
                <td>{item['value']}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
