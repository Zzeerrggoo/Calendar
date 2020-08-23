import React from 'react';
import classNames from 'classnames';
import styles from './calendar-date.module.css';
import { isSameDay, isThisMonth } from 'date-fns';
import PropTypes from 'prop-types';

function CalendarDate(props) {
  const { date, currentDate } = props;
  const isCurrentDate = isSameDay(date, currentDate);

  const className = classNames(styles.date, {
    [styles.currentDate]: isCurrentDate,
    [styles.otherMonthDate]: !isThisMonth(date),
  });

  return (
    <td className={className}>
      {date.getDate()}
      {isCurrentDate && <span className={styles.currentDayCircle}></span>}
    </td>
  );
}

CalendarDate.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  currentDate: PropTypes.instanceOf(Date),
};

CalendarDate.defaultProps = {
  currentDate: new Date(),
};

export default CalendarDate;
