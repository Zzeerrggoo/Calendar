import React from 'react';
import * as date from 'date-fns';

function CurrentDate(props) {
  const dateNow = Date.now();

  return (
    <div>
      <h1>{date.format(dateNow, 'EEEE')}</h1>
      <h2>{date.format(dateNow, 'd')}</h2>
    </div>
  );
}

export default CurrentDate;
