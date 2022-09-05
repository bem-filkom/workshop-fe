import React from "react";

const TodoCard = (props) => {
  return (
    <>
      {props.checkboxStatus ? (
        <div className="bg-[#2F6568] mt-3 flex flex-row justify-between w-[1000px] py-2 px-4 rounded text-white">
          {props.children}
        </div>
      ) : (
        <div className="bg-[#F4EDE6] mt-3 flex flex-row justify-between w-[1000px] py-2 px-4 rounded">
          {props.children}
        </div>
      )}
    </>
  );
};

export default TodoCard;
