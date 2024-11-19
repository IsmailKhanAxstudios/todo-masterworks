import React from "react";
import s from "./ToDo.module.scss";
import { useState } from "react";
const ToDo = () => {
  const [list, setList] = useState(["Task1", "Task2"]);
  return (
    <div>
      <div className="container">
        {list.map((e, i) => {
          <div>{e}</div>;
        })}
      </div>
    </div>
  );
};

export default ToDo;
