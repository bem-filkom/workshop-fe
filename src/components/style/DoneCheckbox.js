const DoneCheckbox = () => {
  return (
    <div className="border-l-2 border-black flex flex-col">
      <h1 className="text-josefin text-2xl ml-8  font-semibold">DONE</h1>
      <input
        type="checkbox"
        value="done"
        className="ml-12 mt-4 w-8 h-8"
      ></input>
    </div>
  );
};

export default DoneCheckbox;
