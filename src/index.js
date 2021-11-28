import React from 'react';
import ReactDOM from 'react-dom';
import { ToDoList } from './components/toDoList';
import { SearchPanel } from './components/searchPanel';
import { AppHeader } from './components/appHeader';


const App = () => {

  const todoData = [
    {label: 'Drink coffee', important: false},
    {label: 'Make App', important: true},
    {label: 'Have a launch', important: false}
  ];
  return (
  <div>
    <span>{`${(new Date()).getHours()}:${(new Date()).getMinutes()}`}</span>
    <AppHeader />
    <SearchPanel />
    <ToDoList todos={todoData}/>
  </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
