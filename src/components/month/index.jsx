import React, { Component } from 'react';
import * as date from 'date-fns';
import Week from './../week';

class Month extends Component {
  getWeeks() {
    const { year, currentMonth } = this.props;
    const currentWeeks = [];
    const weekOfMonth = date.getWeeksInMonth(new Date(year, currentMonth, 1));

    for (let i = 0, j = 1; i < weekOfMonth; ++i, j += 7) {
      currentWeeks.push(
        <Week
          year={year}
          weekNumber={date.getWeek(new Date(year, currentMonth, j))}
        />
      );
    }
    return currentWeeks;
  }

  render() {
    return (
      <table>
        <thead>
          <caption>{date.format(Date.now(), 'MMMM y')}</caption>
          <tr>
            <th>s</th>
            <th>m</th>
            <th>t</th>
            <th>w</th>
            <th>t</th>
            <th>f</th>
            <th>s</th>
          </tr>
        </thead>
        <tbody>{this.getWeeks()}</tbody>
      </table>
    );
  }
}

export default Month;
