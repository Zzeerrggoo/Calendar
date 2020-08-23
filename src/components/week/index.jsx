import React, { Component } from 'react';
import CalendarDate from './../calendar-date';
import * as dateFNS from 'date-fns';
import PropTypes from 'prop-types';

class Week extends Component {
  getDates() {
    const { currentDate, startOfWeek } = this.props;
    const calendarDates = dateFNS
      .eachDayOfInterval({
        start: startOfWeek,
        end: dateFNS.addDays(startOfWeek, 6),
      })
      .map((item) => (
        <CalendarDate
          key={item.toDateString()}
          date={item}
          currentDate={currentDate}
        />
      ));

    return calendarDates;
  }

  render() {
    return <tr>{this.getDates()}</tr>;
  }
}

Week.propTypes = {
  startOfWeek: PropTypes.instanceOf(Date).isRequired,
  currentDate: PropTypes.instanceOf(Date),
};

Week.defaultProps = {
  currentDate: new Date(),
};

export default Week;
