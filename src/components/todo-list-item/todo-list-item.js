import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  constructor() {
    super();

    this.onLabelClick = () => {
      this.setState(({ done }) => {
        return {
          done: !done
        };
      });
    };

    this.onMarkImportant = () => {
      this.setState(({ important }) => {
        return {
          important: !important
        };
      });
    }

    this.state = {
      done: false,
      important: false
    };
  }

  render() {

    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

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
          onClick = { this.onLabelClick } >
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm col" onClick={this.onMarkImportant}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm col"
                onClick={ onDeleted }>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };

}
