import React, { useState, useRef } from "react";
import "./ToDo.css";

const ToDo = () => {
  const [list, setList] = useState(["task 1", "task 2"]);
  const inputData = useRef(null);

  const addTask = () => {
    const todoTxt = inputData?.current?.value;
    if (todoTxt) {
      setList([...list, todoTxt]);
      inputData.current.value = "";
    }
  };

  const removeTask = (i) => {
    const updatedList = [...list];
    updatedList.splice(i, 1);
    setList(updatedList);
  };

  return (
    <div className="todo">
      <div className="header">You Have {list?.length} ToDos</div>
      <div className="container">
        {list?.map((e, i) => {
          return (
            <div className="box" key={i}>
              <div className="item">{e}</div>
              <div
                className="remove"
                onClick={() => {
                  removeTask(i);
                }}
              >
                <span>x</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="searchContainer">
        <input
          className="input"
          type="text"
          placeholder="Enter Item"
          ref={inputData}
        />
        <div className="btn" onClick={addTask}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default ToDo;
