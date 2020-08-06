import React from 'react';
import classNames from 'classnames';
import styles from './calendar-date.module.css';

function CalendarDate(props) {
  const { date, currentDate, isCurrentMonth } = props;

  const className = classNames(styles.date, {
    [styles.currentDate]: isCurrentMonth && date === currentDate,
    [styles.otherMonthDate]: !isCurrentMonth,
  });

  return <td className={className}>{date}</td>;
}

export default CalendarDate;
