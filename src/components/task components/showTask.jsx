/* eslint-disable react/prop-types */

import { useState } from "react";
import EditTask from "./editTask";

const ShowTask = ({ tasks, deleteTask, editTask, toggleCompleted, filter }) => {
  const [editTaskId, setEditTaskId] = useState(null);
  const [newText, setNewText] = useState("");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  if (tasks.length > 0) {
    return (
      <ul>
        {filteredTasks.map((task) => {
          return (
            <EditTask
              editTaskId={editTaskId}
              task={task}
              newText={newText}
              setNewText={setNewText}
              editTask={editTask}
              setEditTaskId={setEditTaskId}
              deleteTask={deleteTask}
              key={task.id}
              toggleCompleted={toggleCompleted}
              filter={filter}
            />
          );
        })}
      </ul>
    );
  }
  return <p>No task found</p>;
};

export default ShowTask;
