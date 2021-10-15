import { useState } from "react";

export const TaskForm = ({ createNewTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleTaskCreation = (event) => {
    event.preventDefault();
    createNewTask(taskName);
  };

  const handleNewTaskNameChange = (event) => {
    const value = event.target.value;
    setTaskName(value);
  };

  return (
    <div>
      <form onSubmit={handleTaskCreation}>
        <h2>Create a new task:</h2>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={handleNewTaskNameChange}
        ></input>
        <button color="primary" variant="contained">
          create task
        </button>
      </form>
    </div>
  );
};
