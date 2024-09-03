/* eslint-disable react/prop-types */
import { useState } from "react";

const CreateTask = ({ addTask }) => {
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        name=""
        id=""
        value={text}
        placeholder="Add Task"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTask(text);
          setText("");
        }}
      >
        Create Task
      </button>
    </>
  );
};

export default CreateTask;
