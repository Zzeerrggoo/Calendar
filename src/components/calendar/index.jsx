import React, { Component } from 'react';
import Day from './../day';
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
        <Day currentDate={currentDate} />
        <Month currentDate={currentDate} />
      </article>
    );
  }
}

export default Calendar;
