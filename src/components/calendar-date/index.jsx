import React from 'react';
import classNames from 'classnames';
import styles from './calendar-date.module.css';

function CalendarDate(props) {
  const { date, currentDate, isCurrentMonth } = props;
  const isCurrentDate = isCurrentMonth && date === currentDate.getDate();

  const className = classNames(styles.date, {
    [styles.currentDate]: isCurrentDate,
    [styles.otherMonthDate]: !isCurrentMonth,
  });

  return (
    <td className={className}>
      {date}
      {isCurrentDate && <span className={styles.currentDayCircle}></span>}
    </td>
  );
}

export default CalendarDate;
