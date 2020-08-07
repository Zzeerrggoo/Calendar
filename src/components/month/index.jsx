import React, { Component } from 'react';
import * as date from 'date-fns';
import Week from './../week';
import styles from './month.module.css';

class Month extends Component {
  getWeeks() {
    const { year, currentMonth } = this.props;
    const currentWeeks = [];
    const weekOfMonth = date.getWeeksInMonth(new Date(year, currentMonth, 1));

    for (let i = 0, j = 1; i < weekOfMonth; ++i, j += 7) {
      currentWeeks.push(
        <Week
          key={i}
          year={year}
          weekNumber={date.getWeek(new Date(year, currentMonth, j))}
        />
      );
    }
    return currentWeeks;
  }

  render() {
    return (
      <div className={styles.container}>
        <table>
          <caption className={styles.tableCaption}>
            {date.format(Date.now(), 'MMMM y')}
          </caption>
          <thead className={styles.tableHead}>
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
          <tbody className={styles.tbody}>{this.getWeeks()}</tbody>
        </table>
      </div>
    );
  }
}

export default Month;
