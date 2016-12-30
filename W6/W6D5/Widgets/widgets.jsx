import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './tabs';
import Clock from './clock';

const Panes = [
  {title: "one", content: "I'm number one"},
  {title: "two", content: "Two? That's me"},
  {title: "three", content: "Last but best"}
];

class Root extends React.Component {
  render() {
    return(
      <div>
        <Clock />
        <Tabs panes={Panes}/>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Root/>, root);
});
