import * as React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

// import './app.scss'

const Todos: React.FC = () => {
  return (
    <>
      <h2>Todos</h2>
      <TodoForm />
      <TodoList />
    </>);
};

export default Todos;