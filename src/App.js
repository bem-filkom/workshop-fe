import React, { useState } from "react";
import Header from "./components/style/Header";
import TodoInput from "./components/TodoInput";
import UsersTodo from "./components/UsersTodo";

function App() {
  const [todoList, setTodoList] = useState([]);

  const todoListInputHandler = (list) => {
    setTodoList(prevList => {
      const updatedTodo = [...prevList];
      updatedTodo.unshift( { todolist: list, key: Math.random() });
      return updatedTodo;
    });
  };

  const deleteItemHandler = (newKey) =>{
    setTodoList(prevList => {
      const updatedTodo = prevList.filter(id => id.key !== newKey);
      return(updatedTodo);
    })
  }


  return (
    <Header>
      <TodoInput todoinput={todoListInputHandler} />
      <UsersTodo usersTodo={todoList} onDelete={deleteItemHandler} />
    </Header>
  );
}

export default App;
