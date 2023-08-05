import * as React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

// import './app.scss'

export type TodoType = {
  id: number;
  message: string;
};


const todos: TodoType[] = [
  {id: 1, message: 'wakeUp'},
  {id: 2, message: 'cleanTeeth'},
  {id: 3, message: 'goWork'},
]

const Todos: React.FC = () => {
  return (
    <>
      <h2>Todos</h2>
      <TodoForm />
      <TodoList todos={todos}/>
    </>);
};

export default Todos;