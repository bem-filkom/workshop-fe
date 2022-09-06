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

  const deleteListInput = () => {
    const newList = props.usersTodo.filter((x) => x.key !== editKey);
    props.onChange(newList);
  };

  const updateListInput = (newList) => {
    const index = props.usersTodo.findIndex((x) => x.key === editKey);
    props.usersTodo[index] = { todolist: newList, key: editKey };
    props.onChange(props.usersTodo);
  };

  // const checkboxHandler = () => {
  //   const checkboxCard = props.usersTodo.filter((x)=>x.key !== checkboxKey);
  //   props.onChange(checkboxCard);
  // };

  return (
    <>
      {popUp && (
        <Popup
          onExit={exitPopup}
          onDelete={deleteListInput}
          onEdit={updateListInput}
        />
      )}
      <div className="flex flex-row justify-evenly overflow-visible todolist overflow-y-scroll">
        <div className="flex flex-col">
          {props.usersTodo.length == 0 ? (
            <div></div>
          ) : (
            <div className="flex flex-row text-josefin text-2xl font-semibold text-center">
              <h1 className="relative left-[40%]">ACTIVITIES</h1>
              <h1 className="relative left-[85%]">DONE</h1>
            </div>
          )}

          {props.usersTodo.map((lists) => (
            <>
              <div className="flex flex-row">
                <TodoCard
                  key={lists.key}
                  onClick={exitPopup}
                  checkboxStatus={checkbox}
                >
                  <ul className="text-poppins">
                    <li key={lists.key}>{lists.todolist}</li>
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
                    setEditKey(lists.key);
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
