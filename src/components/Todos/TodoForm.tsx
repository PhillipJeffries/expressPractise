import * as React from "react";
import { useState } from "react";
// import img from "./assets/img/postcard.png";

// import './app.scss'

const TodoForm: React.FC = () => {
  const [value, setValue] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e)
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <input
        type="text"
        name="todo"
        value={value}
        placeholder="Enter your Todo item"
        onChange={(e)=>setValue(e.target.value)}
      />
      <button type="submit">+</button>
    </form>);
};

export default TodoForm;