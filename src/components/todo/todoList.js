import React from 'react';
import {TodoItem} from './todoItem';
import PropTypes from 'prop-types';

export const TodoList = (props) => {
  return (
    <div className="Todo-List">
      <ul>
        {props.todos.map(todo =>
        <TodoItem key={todo.id} {...todo}/>)}
      </ul>
    </div>
  )
}

TodoList.PropTypes = {
todos:
PropTypes.array.isRequired
}
