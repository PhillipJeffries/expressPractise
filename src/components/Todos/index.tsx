import * as React from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

// import './app.scss'

export type TodoType = {
  id?: number;
  message: string;
};


const initialState: TodoType[] = [
  {id: 1, message: 'wakeUp'},
  {id: 2, message: 'cleanTeeth'},
  {id: 3, message: 'goWork'},
]

const Todos: React.FC = () => {
  const [todoList, setTodoList] = useState(initialState);

  return (
    <>
      <h2>Todos</h2>
      <TodoForm todos={todoList} setTodos={setTodoList}/>
      <TodoList todos={todoList}/>
    </>);
};

export default Todos;