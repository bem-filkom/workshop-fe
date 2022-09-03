import React, { useState } from "react";
import TodoInputStyle from "./style/TodoInputStyle";

const TodoInput = (props) => {
  
  const [addTodoList, setAddTodoList] = useState("");

  const usersHandler = (event) => {
    event.preventDefault();
    props.todoinput(addTodoList);
    console.log(addTodoList);
    setAddTodoList("");
  };

  const todoListHandler = (event) => {
    setAddTodoList(event.target.value);
  };

  return (
      <TodoInputStyle>
        <form onSubmit={usersHandler}>
          <input
            type="text"
            placeholder="Add your To Do here..."
            onChange={todoListHandler}
            value={addTodoList}
            maxLength="256"
            size="50"
            className="rounded p-2 shadow-sm shadow-[#161616]"
          />
        </form>
      </TodoInputStyle>
  );
};

export default TodoInput;
