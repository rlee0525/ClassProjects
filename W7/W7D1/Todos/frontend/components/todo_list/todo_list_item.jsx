import React from 'react';

class TodoListItem extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.todo.title}</li>
        <button onClick={this.props.removeTodo}>Delete</button>
      </div>
    );
  }
}

export default TodoListItem;
