import React from 'react';
import { uniqueId } from '../../util/unique_id';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  change(label) {
    return e => this.setState({[label]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    });
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>Title:
          <input value={this.state.title}
            onChange={this.change('title')}
            required></input>
        </label>

        <label>Body:
          <textarea value={this.state.body}
            onChange={this.change('body')}
            required></textarea>
        </label>

        <button>Create Todo!</button>
      </form>
    );
  }
}

export default TodoForm;
