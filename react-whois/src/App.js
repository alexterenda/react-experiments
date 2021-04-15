import React, { useState } from 'react';

import './App.css';

const App = () => {
  const [domain, setDomain] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(domain);
  };

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
