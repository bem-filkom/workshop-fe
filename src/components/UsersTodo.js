import React, { useState } from "react";
import Popup from "./Popup";
import TodoCard from "./style/TodoCard";

const UsersTodo = (props) => {
  const [popUp, setPopUp] = useState(false);
  const [editKey, setEditKey] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const exitPopup = () => {
    setPopUp(!popUp);
    setEditKey("");
  };

  const deleteHandler = () => {
    const newList = props.usersTodo.filter((x) => x.key !== editKey);
    props.onChange(newList);
  };

  const updateListInput = (newList) => {
    const index = props.usersTodo.findIndex((x) => x.key === editKey);
    console.log(index);
    console.log(props.usersTodo[index]);
    props.usersTodo[index] = { todolist: newList, key: editKey };
    console.log(props.usersTodo[index]);
    props.onChange(props.usersTodo);
  };

  return (
    <>
      {popUp && (
        <Popup
          onExit={exitPopup}
          onDeletePopup={deleteHandler}
          onEdit={updateListInput}
        />
      )}
      <div className="flex flex-row justify-evenly overflow-visible todolist overflow-y-scroll">
        <div className="flex flex-col">
          {props.usersTodo.map((lists) => (
            <>
              <div className="flex flex-row text-josefin text-2xl font-semibold text-center">
                <h1 className="relative left-[40%]">ACTIVITIES</h1>
                <h1 className="relative left-[85%]">DONE</h1>
              </div>
              <div className="flex flex-row">
                <TodoCard
                  key={lists.key}
                  onClick={exitPopup}
                  checkboxStatus={checkbox}
                >
                  <ul className="text-poppins">
                    <li>{lists.todolist}</li>
                  </ul>
                  <div className="">
                    <ion-icon
                      name="ellipsis-vertical-outline"
                      onClick={() => {
                        setPopUp(!popUp);
                        setEditKey(lists.key);
                      }}
                    ></ion-icon>
                  </div>
                </TodoCard>
                <input
                  type="checkbox"
                  value="done"
                  className="ml-12 mt-4 w-8 h-8"
                  onClick={() => {
                    setCheckbox(!checkbox);
                  }}
                ></input>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default UsersTodo;
