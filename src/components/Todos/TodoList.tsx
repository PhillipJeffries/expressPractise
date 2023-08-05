import * as React from "react";
import Todo from "./Todo";
import type { TodoType } from ".";

import './todoList.scss'



const TodoList: React.FC<{todos: TodoType[]}> = ({todos}) => {
  return (
    <div className="todoList">
      {todos.map((todo: TodoType) => {
        return <Todo todo={todo.message} key={todo.id}/>
      })}
    </div>);
};

export default TodoList;