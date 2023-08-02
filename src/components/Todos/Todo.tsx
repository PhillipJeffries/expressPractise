import * as React from "react";
// import img from "./assets/img/postcard.png";

// import './app.scss'

const Todo: React.FC<{id:number; message: string}> = (todo) => {
  return (
    <>
      <h3>{todo.message}</h3>
    </>);
};

export default Todo;