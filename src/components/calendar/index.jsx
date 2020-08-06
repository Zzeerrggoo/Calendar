import React, { Component } from 'react';
import CurrentDate from './../date';

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <CurrentDate />
      </div>
    );
  }
}

export default Calendar;
