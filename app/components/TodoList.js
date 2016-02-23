import React, { PropTypes } from 'react';
import Todo from './Todo';

export default function TodoList({ todos, onTodoClick }) {
  return (
    <ul>
      {todos.map(todo =>
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      )}
    </ul>
  );
};

TodoList.PropTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}
