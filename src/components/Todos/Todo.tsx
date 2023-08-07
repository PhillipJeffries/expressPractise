import * as React from "react";
import { useState } from "react";
import type { TodoType } from ".";


const Todo: React.FC<{todo: TodoType, deleteHandler: Function, updateHandler: Function}> = ({todo, deleteHandler, updateHandler}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updateTodo, setUpdateTodo] = useState(todo);

  const updateTodoState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateTodo({
      id: todo.id,
      message: e.target.value
    })
  }

  const updateAndReset = (input: TodoType, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateHandler(input);
    setIsEditing(false);
  }

  return (
    <>
      {isEditing ? 
      <form onSubmit={e => updateAndReset(updateTodo, e)}>
        <input 
        type="text"
        defaultValue={todo.message}
        onChange={(e) => updateTodoState(e)}/> 
      </form>
      : 
      <h3 onDoubleClick={() => setIsEditing(true)}>{todo.message}</h3>
      }
      <button onClick={()=>deleteHandler(todo.id)} >delete</button>
    </>);
};

export default Todo;