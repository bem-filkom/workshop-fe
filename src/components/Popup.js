import Backdrop from "./style/Backdrop";
import React, { useState } from "react";

const Popup = (props) => {
  const [editTodo, setEditTodo] = useState(false);
  const [editTodolist, setEditTodolist] = useState("");

  const editHandler = (e)=>{
    e.preventDefault();
    props.onEdit(editTodolist);
    setEditTodolist("");
  }

  const editInputHandler = (e)=>{
    setEditTodolist(e.target.value)
  }

  return (
    <>
      <Backdrop onExitBackdrop={props.onExit} />
      <div className="absolute flex flex-col top-[30vh] left-[30vw] text-center text-white bg-[#2F6568] w-[500px] py-4 rounded-xl border-2 border-[#2F6568] font-poppins z-20">
        <h1 className="mb-6 text-3xl">
          Halo! kamu pengen edit atau delete to do list kamu?
        </h1>
        <div className="flex flex-row rounded-b-xl justify-evenly bg-white text-black py-4 -mb-4">
          {editTodo ? (
            <form onSubmit={editHandler}>
              <input
                type="text"
                placeholder="Apa yang ingin anda rubah?"
                onChange={editInputHandler}
                value= {editTodolist}
                maxLength="256"
                size="50"
                className="rounded p-2 shadow-sm shadow-[#161616]"
              />
            </form>
          ) : (
            <>
              <button
                className="rounded bg-[#FFDB5B] py-2 px-12 font-semibold"
                onClick={() => {
                  setEditTodo(!editTodo);
                }}
              >
                EDIT
              </button>
              <button
                onClick={props.onDeletePopup}
                className="rounded bg-[#FF5454] py-2 px-12 font-semibold"
              >
                DELETE
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Popup;
