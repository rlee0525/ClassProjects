import React from 'react';
import ReactDOM from 'react-dom';

class Root extends React.Component {
  constructor(props) {
    super(props);

    let isAm = true;
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    
    if (currentHour >= 12) {
      currentHour -= 12;
      isAm = false;
    }

    this.state = {
      hours: currentHour,
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      isAm: isAm
    };

    this.incrementTime();
  }

  incrementTime() {
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    let { hours, minutes, seconds, isAm } = this.state;
    
    seconds++;

    if (seconds >= 60) {
      seconds -= 60;
      minutes++;
    }

    if (minutes >= 60) {
      minutes -= 60;
      hours++;
    }

    this.setState({
      hours,
      minutes,
      seconds,
      isAm
    });
  }

  pad(time) {
    if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  }

  render() {
    return(
      <div className="container">
        <div className="clock">
          <div className="hours">
            {this.pad(this.state.hours)}
          </div>
          <div className="minutes">
            {this.pad(this.state.minutes)}
          </div>
          <div className="seconds">
            {this.pad(this.state.seconds)}
          </div>
          <div className="ampm">
            {this.state.isAm ? "AM" : "PM"}
          </div>
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
