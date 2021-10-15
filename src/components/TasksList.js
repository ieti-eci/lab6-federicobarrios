import { Task } from "./Task";

export const TasksList = ({ tasks, changeTask }) => {
  return (
    <div>
      {tasks.map((task, index) => {
        return (
          <div key={index.toString()}>
            <Task
              isCompleted={task.isCompleted}
              taskName={task.taskName}
              onTaskChange={changeTask(index)}
            />
          </div>
        );
      })}
    </div>
  );
};
