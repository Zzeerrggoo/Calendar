import React, { Component } from 'react';
import * as dateFNS from 'date-fns';
import Week from './../week';
import styles from './month.module.css';
import PropTypes from 'prop-types';

class Month extends Component {
  getWeeks() {
    const { currentDate } = this.props;
    const currentWeeks = dateFNS
      .eachWeekOfInterval({
        start: dateFNS.startOfMonth(currentDate),
        end: dateFNS.endOfMonth(currentDate),
      })
      .map((item, index) => (
        <Week key={index} startOfWeek={item} currentDate={currentDate} />
      ));

    return currentWeeks;
  }

  render() {
    return (
      <div className={styles.container}>
        <table>
          <caption className={styles.tableCaption}>
            {dateFNS.format(Date.now(), 'MMMM y')}
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

Month.propTypes = {
  currentDate: PropTypes.instanceOf(Date),
};

Month.defaultProps = {
  currentDate: new Date(),
};

export default Month;
