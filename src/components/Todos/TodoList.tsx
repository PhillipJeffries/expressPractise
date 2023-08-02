import * as React from "react";
import Todo from "./Todo";

import './todoList.scss'

const todos = [
  {id: 1, message: 'wakeUp'},
  {id: 2, message: 'cleanTeeth'},
  {id: 3, message: 'goWork'},
]

const TodoList: React.FC = () => {
  return (
    <div className="todoList">
      {todos.map(todo => {
        return <Todo {...todo} key={todo.id}/>
      })}
    </div>);
};

export default TodoList;