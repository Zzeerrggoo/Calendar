import React, { Component } from 'react';
import CalendarDate from './../calendar-date';
import * as dateFns from 'date-fns';

class Week extends Component {
  getDates() {
    const currentDate = new Date();
    let firstDate = this.getDateOfWeek();
    firstDate.setDate(firstDate.getDate() - firstDate.getDay());
    const calendarDates = [];

    for (let i = 0; i < 7; ++i) {
      calendarDates.push(
        <CalendarDate
          date={firstDate.getDate()}
          currentDate={currentDate}
          isCurrentMonth={firstDate.getMonth() === currentDate.getMonth()}
        />
      );

      firstDate.setDate(firstDate.getDate() + 1);
    }

    return calendarDates;
  }

  getDateOfWeek() {
    const { year, weekNumber } = this.props;
    const d = 1 + (weekNumber - 1) * 7;
    return new Date(year, 0, d);
  }

  render() {
    return <tr>{this.getDates()}</tr>;
  }
}

export default Week;
