import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPane: 0
    };
  }

  render() {
    let pane = this.props.panes[this.state.selectedPane];

    return (
      <div className="tabs">
        <h1>Tabs</h1>
        <br />
        <ul className="tabs-header">
          {this.props.panes.map((obj, selectedPane) => (
            <li key={selectedPane}
              className={(pane.title === obj.title) ? "bold" : ""}
              onClick={() => {
                this.setState({selectedPane});
              }}>{obj.title}</li>
          ))}
        </ul>

        <article className="tabs-content">
          {this.props.panes[this.state.selectedPane].content}
        </article>
      </div>
    );
  }
}

export default Tabs;
