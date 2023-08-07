import * as React from "react";
import { useState } from "react";
import { TodoType } from ".";
// import img from "./assets/img/postcard.png";

// import './app.scss'

const TodoForm: React.FC<{todos: TodoType[], setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>}> = ({todos, setTodos}) => {
  const [value, setValue] = useState({message: ''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({message: e.target.value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValue({message: ''});
    setTodos([{id: todos.length+1, message: value.message}, ...todos])
  }
  
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <input
        type="text"
        name="todo"
        value={value.message}
        placeholder="Enter your Todo item"
        onChange={handleChange}
      />
      <button type="submit">+</button>
    </form>);
};

export default TodoForm;