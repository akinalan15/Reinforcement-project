import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [value, setValue] = useState("");
  const addItem = () => {
    addTask(value);
    setValue("");
  };
  return (
    <>
      <div className="input-container">
        <input
          className="input"
          type="text"
          placeholder="Add a Task"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className="add-button" onClick={addItem}>
          ADD
        </button>
      </div>
    </>
  );
};

export default AddTask;
