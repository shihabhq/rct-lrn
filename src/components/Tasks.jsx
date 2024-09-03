import { useState } from "react";
import CreateTask from "./task components/createTask";
import ShowTask from "./task components/showTask";
import { nanoid } from "nanoid";
import RadioButtons from "./task components/filtered";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedOption, setSelectedOption] = useState("all");
  //   const [visibility, setVisibility] = useState("all");
  const addTask = (text) => {
    if (text) {
      const task = {
        text,
        createdAt: new Date(),
        completed: false,
        id: nanoid(),
      };
      setTasks([...tasks,task]);
    } else {
      alert("Task field cannot be empty");
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  const editTask = (taskId, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  const toggleCompleted = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <h3>Tasks</h3>
      <CreateTask addTask={addTask} />
      <RadioButtons
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <ShowTask
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleCompleted={toggleCompleted}
        filter = {selectedOption}
      />
    </>
  );
};

export default Task;
