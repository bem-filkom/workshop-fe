import React, { useState } from "react";
import Header from "./components/style/Header";
import TodoInput from "./components/TodoInput";
import UsersTodo from "./components/UsersTodo";

function App() {
  const [todoList, setTodoList] = useState([]);

  const todoListInputHandler = (list) => {
    setTodoList(prevList => {
      const updatedTodo = [...prevList];
      updatedTodo.unshift( { todolist: list, key: Math.random().toString() });
      return updatedTodo;
    });
  };

  const changeTodoListHandler = (newList) =>{
    setTodoList(newList)
  }


  return (
    <Header>
      <TodoInput todoinput={todoListInputHandler} />
      <UsersTodo usersTodo={todoList} onChange={changeTodoListHandler} />
    </Header>
  );
}

export default App;
