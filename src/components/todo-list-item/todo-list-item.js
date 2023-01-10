import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (
    <span className="todo-list-item row">
      <span
        className="todo-list-item-label col-9"
        style={style}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm col">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm col">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
