import React from 'react';

const TodoCard = (props) => {

  return (
    <div className="bg-[#F4EDE6] mt-3 flex flex-row justify-between w-[1000px] py-2 px-4 rounded">
      {props.children}
    </div>
  );
};

export default TodoCard;
