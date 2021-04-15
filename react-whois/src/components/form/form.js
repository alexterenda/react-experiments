import React from 'react';

const Form = ({ handleSubmit, domain, setDomain }) => {
  return (
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
  );
};

export default Form;
