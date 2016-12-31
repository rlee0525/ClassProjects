import React from 'react';
import SynthContainer from './synth/synth_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='app'>
        <SynthContainer />
      </div>
    );
  }
}

export default App;
