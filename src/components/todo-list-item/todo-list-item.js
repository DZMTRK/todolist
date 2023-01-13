import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  constructor() {
    super();

    this.onLabelClick = () => {
      console.log(`Done: ${this.props.label}`);
    };
  }

  render() {

    const { label, important = false } = this.props;

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };
  
    return (
      <span className="todo-list-item row">
        <span
          className="todo-list-item-label col-9"
          style={style}
          onClick = { this.onLabelClick } >
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

}
