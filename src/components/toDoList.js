import React from 'react';
import { ToDoListItem } from './toDoListItem';

export const ToDoList = ({ todos }) => {
    const items = ['Learn React 1', 'Build App 1'];
  
  
    return (
      <ul>
        <li><ToDoListItem label={todos[0].label} important={todos[0].important}/></li>
        <li><ToDoListItem label={todos[1].label} important={todos[1].important}/></li>
      </ul>
    );
  };