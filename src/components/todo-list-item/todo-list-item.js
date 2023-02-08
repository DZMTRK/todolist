import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({  label, onDeleted, 
                          onToggleImportant, onToggleDone,
                          important, done }) => {

    let classNames = 'todo-list-item row';
    if ( done ) {
      classNames += ' done';
    };

    if (important) {
      classNames += ' important'
    }
  
    return (
      <span className= { classNames }>
        <span
          className="todo-list-item-label col-9"
          onClick = { onToggleDone } >
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm col" onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm col"
                onClick={ onDeleted }>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );

}

export default TodoListItem;