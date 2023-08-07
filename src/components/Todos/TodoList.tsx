import * as React from "react";
import Todo from "./Todo";
import type { TodoType } from ".";

import './todoList.scss'



const TodoList: React.FC<{todos: TodoType[], deleteHandler: Function, updateHandler: Function}> = ({todos, deleteHandler, updateHandler}) => {
  return (
    <div className="todoList">
      {todos.map((todo: TodoType) => {
        return <Todo todo={todo} deleteHandler={deleteHandler} updateHandler={updateHandler} key={todo.id}/>
      })}
    </div>);
};

export default TodoList;