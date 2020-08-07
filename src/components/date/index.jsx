import React from 'react';
import * as date from 'date-fns';
import styles from './date.module.css';

function CurrentDate(props) {
  const dateNow = Date.now();

  return (
    <div className={styles.container}>
      <h1 className={styles.containerDay}>{date.format(dateNow, 'EEEE')}</h1>
      <h2 className={styles.containerDate}>{date.format(dateNow, 'd')}</h2>
    </div>
  );
}

export default CurrentDate;
