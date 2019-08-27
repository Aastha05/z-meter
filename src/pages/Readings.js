import React from 'react';
import ReadingsList from '../wigets/ReadingsList';
import ViewReading from '../components/ViewReading';

export default function Readings() {
  return (
    <div>
      <h1>Hey this is readings page</h1>
      <ReadingsList />
      <ViewReading />
    </div>
  );
}
