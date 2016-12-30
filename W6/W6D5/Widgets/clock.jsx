import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    let hour = this.state.time.getHours();
    let minute = this.state.time.getMinutes();
    let second = this.state.time.getSeconds();

    hour = (hour < 10) ? `0${hour}` : hour;
    minute = (minute < 10) ? `0${minute}` : minute;
    second = (second < 10) ? `0${second}` : second;

    return(
      <div className="clock">
        <h1>Clock</h1>
        <div className="date-time">
          <span className="date">
            Date: {this.state.time.toDateString()}
          </span>
          <br />
          <span className="time">
            Time: {hour}:{minute}:{second}
          </span>
        </div>
      </div>
    );
  }
}

export default Clock;
