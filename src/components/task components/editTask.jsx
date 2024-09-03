const EditTask = ({editTaskId,task,newText,setNewText,editTask,setEditTaskId,deleteTask,toggleCompleted,filter,key}) => {
  return (
    <li key={key}>
      {editTaskId === task.id ? (
        <>
          <input
            type="text"
            value={newText}
            name=""
            id=""
            onChange={(e) => setNewText(e.target.value)}
          />
          <button
            onClick={() => {
              editTask(task.id, newText);
              setEditTaskId(null);
            }}
          >
            Done
          </button>
          <button onClick={() => setEditTaskId(null)}>Cancel</button>
        </>
      ) : (
        <>
          {task.completed ? <del>{task.text}</del> : task.text }
          <button
            onClick={() => {
              setEditTaskId(task.id);
              setNewText(task.text);
            }}
          >
            Edit
          </button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
          <button style={{color:!task.completed ? 'green':'red'}}
            onClick={() => {
              toggleCompleted(task.id);
            }}
          >
            {task.completed ? "undone" : "done"}
          </button>
        </>
      )}
    </li>
  );
};

export default EditTask;
