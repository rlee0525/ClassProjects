import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ""
    };
  }

  componentDidMount() {
    let pos;
    let location = navigator.geolocation.getCurrentPosition((x) => {
      pos = (x.coords.latitutde, x.coords.longitude);
    });

    this.setState({ location });
  }

  render() {
    return (
      <div>
        Location: { this.state.location };
      </div>
    );
  }
}

export default Weather;
