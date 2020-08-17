import React from 'react';
import * as date from 'date-fns';
import styles from './date.module.css';
import PropTypes from 'prop-types';

function Day(props) {
  const { currentDate } = props;

  return (
    <div className={styles.container}>
      <h1 className={styles.containerDay}>
        {date.format(currentDate, 'EEEE')}
      </h1>
      <h2 className={styles.containerDate}>{date.format(currentDate, 'd')}</h2>
    </div>
  );
}

Day.propTypes = {
  currentDate: PropTypes.instanceOf(Date),
};

Day.defaultProps = {
  currentDate: new Date(),
};

export default Day;
