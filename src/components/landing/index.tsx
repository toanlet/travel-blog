import React from 'react';
import Categories from '../categories';
import _ from 'lodash';
import Feature from '../featured';
export default function Landing() {
  const obj = {
    name: 'toan',
    age: 20,
    email: 'toanle@gmai.com',
    address: { city: 'HN', country: 'VN' },
  };

  const users = [
    { user: 'barney', age: 36 },
    { user: 'fred', age: 40 },
    { user: 'pebbles', age: 1 },
  ];

  const result = _.get(obj, ['address', 'country'], 'default');

  console.log('result', result);
  const res = _.chain(users).sortBy('age');

  console.log('res', res);

  return (
    <div>
      <Categories />
      <Feature />
      
    </div>
  );
}
