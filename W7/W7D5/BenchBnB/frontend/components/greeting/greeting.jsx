import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
  render() {
    let username;

    if (this.props.currentUser) {
      username = this.props.currentUser.username;
    }

    return (
      <div>
        <h1>Welcome {username}</h1>
      </div>
    );
  }
}

export default Greeting;
