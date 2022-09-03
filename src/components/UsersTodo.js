import React, { useState } from "react";
import Popup from "./Popup";
import TodoCard from "./style/TodoCard";

const UsersTodo = (props) => {
  const [popUp, setPopUp] = useState(false);
  const [editKey, setEditKey] = useState("");

  const exitPopup = ()=>{
    setPopUp(!popUp);
  }

  const deleteHandler = ()=>{
    props.onDelete(props.key)
  }

  const updateListInput = ()=>{
    
  }

  return (
    <>
      {popUp && <Popup onExit={exitPopup} onDeletePopup={deleteHandler} onEdit={updateListInput}/>}
      <div className="flex flex-row justify-evenly overflow-visible todolist overflow-y-scroll">
        <div className="flex flex-col">
          <h1 className="text-josefin text-2xl font-semibold text-center">
            ACTIVITIES
          </h1>

          {props.usersTodo.map((lists) => (
            <div className="flex flex-row">
              <TodoCard key={lists.key} onClick={exitPopup}>
                <ul className="text-poppins">
                  <li>
                    {lists.todolist}
                  </li>
                </ul>
                <div className="">
                  <ion-icon
                    name="ellipsis-vertical-outline"
                    onClick={() => {
                      setPopUp(!popUp);
                      // setEditKey(lists.key);
                    }}
                  ></ion-icon>
                </div>
              </TodoCard>
              <input
                type="checkbox"
                value="done"
                className="ml-12 mt-4 w-8 h-8"
              ></input>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UsersTodo;
