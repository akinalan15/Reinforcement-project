import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import "./ToDo.css";

const ToDo = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    setTasks(newTask);
  };
  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };
  useEffect(() => {
    document.title = `You have ${tasks.length} pending  tasks`;
  });
  return (
    <>
      <div className="todo-container">
        <div className="header">TODO App</div>
        <div className="add-task">
          <AddTask addTask={addTask} />
        </div>
        <div className="tasks">
          {tasks.map((task, index) => (
            <ListTask
              task={task}
              removeTask={removeTask}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ToDo;
