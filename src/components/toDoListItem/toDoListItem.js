import React, { Component } from 'react';
import './toDoListItem.css';

export class ToDoListItem extends Component {

  constructor() {
    super();
    this.state = {
      done: false,
      important: false
    }
  }

  onLabelClick = () => {
      this.setState((state) => {
        return {
          done: !state.done
        };
      });
    };

  onImportantClick = () => {
      this.setState((state) => {
        return {
          important: !state.important
        };
      });
    };


  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;

    let spanClassNames = 'todo-list-item';

    done ? spanClassNames += ' done' : spanClassNames += '';
    important ? spanClassNames += ' important' : spanClassNames += '';

    return (
        <span className={spanClassNames}>
            <span className="todo-list-item-label" onClick={this.onLabelClick}>{label}</span>

          <button type="button" className="btn btn-outline-success btn-sm float-right" onClick={this.onImportantClick}>
              <i className="fa fa-exclamation"/>
            </button>

            <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}>
              <i className="fa fa-trash-o"/>
            </button>
        </span>
    );
  }
};