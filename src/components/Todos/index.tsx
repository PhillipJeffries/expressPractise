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
  
  const deleteHandler = (id: number) => {
    const newTodos = todoList.filter(item => {
      return item.id !== id
    })
    setTodoList(newTodos)
  }

  const updateHandler = (todo: TodoType) => {
    setTodoList(todoList.map(item => {
      if(item.id === todo.id) {
        return {
          ...item,
          message: todo.message
        }
      } else {
        return item
      }
    }))
  }

  return (
    <>
      <h2>Todos</h2>
      <TodoForm todos={todoList} setTodos={setTodoList}/>
      <TodoList todos={todoList} deleteHandler={deleteHandler} updateHandler={updateHandler}/>
    </>);
};

export default Todos;