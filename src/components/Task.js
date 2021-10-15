export const Task = ({ isCompleted, taskName, onTaskChange }) => {
  const styleOfTheComponent = {
    textDecoration: isCompleted ? "line-through" : "",
  };

  return (
    <div class="Task-card">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onTaskChange}
      ></input>
      <span style={styleOfTheComponent}>{taskName}</span>
    </div>
  );
};
