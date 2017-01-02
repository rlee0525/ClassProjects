import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {
  render() {
    const todoListItem = this.props.todos.map( (todo, idx) => (
      <TodoListItem key={idx}
        todo={todo} />
    ));

    return (
      <div className="TodoList">
        <ul>
          {todoListItem}
        </ul>
      </div>
    );
  }
}

export default TodoList;
