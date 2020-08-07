import React, { Component } from 'react';
import CurrentDate from './../date';
import Month from './../month';
import styles from './calendar.module.css';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: new Date(),
    };
  }

  render() {
    const { currentDate } = this.state;
    return (
      <article className={styles.container}>
        <CurrentDate />
        <Month
          year={currentDate.getFullYear()}
          currentMonth={currentDate.getMonth()}
        />
      </article>
    );
  }
}

export default Calendar;
