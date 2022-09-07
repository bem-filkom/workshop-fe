import React, { useState } from "react";

const TodoCard = (props) => {
  const [checked, setChecked] = useState(props.isChecked);
  return (
    <>
      <div className="flex flex-row">
        {checked ? (
          <div className="bg-[#2F6568] mt-3 flex flex-row justify-between w-[1000px] py-2 px-4 rounded text-white">
            {props.children}
          </div>
        ) : (
          <div className="bg-[#F4EDE6] mt-3 flex flex-row justify-between w-[1000px] py-2 px-4 rounded">
            {props.children}
          </div>
        )}
        <input
          type="checkbox"
          value="done"
          className="ml-12 mt-4 w-8 h-8"
          defaultChecked={checked}
          onClick={(e) => {
            setChecked(e.target.checked);
            props.onChecked(props.keys, e.target.checked)
          }}
        ></input>
      </div>
    </>
  );
};

export default TodoCard;
