import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  render() {
    const { todos, receiveTodo, removeTodo } = this.props;
    const todoListItem = todos.map( (todo, idx) => (
      <TodoListItem key={idx}
        todo={todo}
        removeTodo={removeTodo(todo)} />
    ));

    return (
      <div>
        <div className="TodoList">
          <ul>
            {todoListItem}
          </ul>
        </div>

        <div className="TodoForm">
          <TodoForm receiveTodo={receiveTodo} />
        </div>
      </div>
    );
  }
}

export default TodoList;
