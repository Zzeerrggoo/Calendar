import React from 'react';
import classNames from 'classnames';
import styles from './calendar-date.module.css';
import PropTypes from 'prop-types';

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

CalendarDate.propTypes = {
  date: PropTypes.number.isRequired,
  isCurrentMonth: PropTypes.bool.isRequired,
  currentDate: PropTypes.instanceOf(Date),
};

CalendarDate.defaultProps = {
  currentDate: new Date(),
};

export default CalendarDate;
