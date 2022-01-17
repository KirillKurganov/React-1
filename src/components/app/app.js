import { ToDoList } from '../toDoList';
import { SearchPanel } from '../searchPanel';
import { AppHeader } from '../appHeader';
import { ItemStatusFilter } from '../itemStatusFilter';
import './app.css';

export const App = () => {

  const todoData = [
    {label: 'Drink coffee', important: false, id: 1},
    {label: 'Make App', important: true, id: 2},
    {label: 'Have a lunch', important: false, id: 3}
  ];

  return (
  <div className="todo-app">
    <span>{`${(new Date()).getHours()}:${(new Date()).getMinutes()}`}</span>
    <AppHeader toDo={1} done={3}/>
    <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
    </div>
    <ToDoList
      todos={todoData}
      onDeleted={(id) => console.log('Del', id)}/>
  </div>
  );
};