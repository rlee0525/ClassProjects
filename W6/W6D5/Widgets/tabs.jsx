import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPane: 0
    };
  }

  render() {
    let currentPane = this.props.panes[this.state.selectedPane];

    return (
      <div className="tabs">
        <h1>Tabs</h1>
        <br />
        <ul className="tabs-header">
          {this.props.panes.map((pane, selectedPane) => (
            <li key={selectedPane}
              className={(currentPane.title === pane.title) ? "bold" : ""}
              onClick={() => {
                this.setState({selectedPane});
              }}>{pane.title}</li>
          ))}
        </ul>

        <article className="tabs-content">
          {currentPane.content}
        </article>
      </div>
    );
  }
}

export default Tabs;
