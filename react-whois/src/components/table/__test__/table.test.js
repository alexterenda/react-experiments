import React from 'react';
import renderer from 'react-test-renderer';

import Table from '../table';

const testDomainData = [
  {
    key: 'address',
    name: 'Address',
    value: '10 Corporate Drive Suite 300',
  },
  {
    key: 'city',
    name: 'City',
    value: 'Burlington',
  },
  {
    key: 'country',
    name: 'Country',
    value: 'US',
  },
  {
    key: 'creation_date',
    name: 'Creation Date',
    value: 'Fri, 01 Jul 1994 00:00:00 GMT',
  },
  {
    key: 'creation_date ',
    name: 'Creation Date',
    value: 'Fri, 01 Jul 1994 04:00:00 GMT',
  },
  {
    key: 'dnssec',
    name: 'Dnssec',
    value: 'unsigned',
  },
  {
    key: 'domain_name',
    name: 'Domain Name',
    value: 'DOMAIN.COM',
  },
  {
    key: 'emails',
    name: ' Emails',
    value: 'dtransfers@registerapi.com',
  },
  {
    key: 'emails ',
    name: ' Emails',
    value: 'jason@endurance.com',
  },
  {
    key: 'emails ',
    name: ' Emails',
    value: 'mike.chattan@endurance.com',
  },
  {
    key: 'emails ',
    name: ' Emails',
    value: 'mark@endurance.com',
  },
  {
    key: 'emails ',
    name: ' Emails',
    value: 'linda.scott@endurance.com',
  },
  {
    key: 'emails ',
    name: ' Emails',
    value: 'joanna.krith@endurance.com',
  },
  {
    key: 'emails ',
    name: ' Emails',
    value: 'compliance@domain-inc.net',
  },
  {
    key: 'emails ',
    name: ' Emails',
    value: 'corpdomains@endurance.com',
  },
  {
    key: 'expiration_date',
    name: 'Expiration Date',
    value: 'Thu, 07 Jan 2021 00:00:00 GMT',
  },
  {
    key: 'expiration_date ',
    name: 'Expiration Date',
    value: 'Thu, 07 Jan 2021 13:34:24 GMT',
  },
  {
    key: 'name',
    name: ' Name',
    value: 'Domain Administrator',
  },
  {
    key: 'name_servers',
    name: ' Name Servers',
    value: 'NS-1250.AWSDNS-28.ORG',
  },
  {
    key: 'name_servers ',
    name: ' Name Servers',
    value: 'NS-166.AWSDNS-20.COM',
  },
  {
    key: 'name_servers ',
    name: ' Name Servers',
    value: 'NS-2022.AWSDNS-60.CO.UK',
  },
  {
    key: 'name_servers ',
    name: ' Name Servers',
    value: 'NS-683.AWSDNS-21.NET',
  },
  {
    key: 'org',
    name: ' Org',
    value: 'Endurance International Group West, Inc',
  },
  {
    key: 'referral_url',
    name: 'Referral Url',
    value: 'http://www.nic.ae',
  },
  {
    key: 'registrar',
    name: 'Registrar',
    value: 'Domain.com, LLC',
  },
  {
    key: 'state',
    name: 'State',
    value: 'MA',
  },
  {
    key: 'status',
    name: 'Status',
    value:
      'clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited',
  },
  {
    key: 'status ',
    name: 'Status',
    value:
      'clientTransferProhibited https://icann.org/epp#clientTransferProhibited',
  },
  {
    key: 'status ',
    name: 'Status',
    value:
      'clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited',
  },
  {
    key: 'updated_date',
    name: 'Updated Date',
    value: 'Fri, 21 Oct 2016 00:00:00 GMT',
  },
  {
    key: 'updated_date ',
    name: 'Updated Date',
    value: 'Fri, 21 Oct 2016 20:11:05 GMT',
  },
  {
    key: 'whois_server',
    name: 'Whois Server',
    value: 'whois.nic.ae',
  },
  {
    key: 'zipcode',
    name: 'Zipcode',
    value: '01803',
  },
];

it('matches snapshot', () => {
  const tree = renderer.create(<Table domainData={testDomainData} />).toJSON();
  expect(tree).toMatchSnapshot();
});
