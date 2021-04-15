import React from 'react';

const Table = ({ domainData }) => {
  return (
    <table data-testid='table'>
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
  );
};

export default Table;
