import React from 'react';
import { Link } from 'react-router';

const personalGreeting = (currentUser, logout) => (
  <hgroup>
    <h1>Hello, {currentUser.username}!</h1>
    <button onClick={logout}>Logout</button>
  </hgroup>
);

const sessionLinks = () => (
  <nav>
    <Link to="/signup">Sign Up!</Link>
    <br />
    <Link to="/login">Log In!</Link>
  </nav>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
