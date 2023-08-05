import * as React from "react";
// import img from "./assets/img/postcard.png";
// import type { Todos } from ".";

// import './app.scss'

const Todo: React.FC<{todo: string}> = ({todo}) => {
  return (
    <>
      <h3>{todo}</h3>
    </>);
};

export default Todo;