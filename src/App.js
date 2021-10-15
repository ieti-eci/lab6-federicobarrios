import "./App.css";
import { Home } from "./components/Home";
import { useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { TasksList } from "./components/TasksList";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (index) => () => {
    const arr = [...tasks];
    arr[index].isCompleted = !arr[index].isCompleted;
    setTasks(arr);
  };

  const createNewTask = (name) => {
    console.log("AAA");
    const arr = [...tasks];
    arr.push({ isCompleted: false, taskName: name });
    setTasks(arr);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <ol>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/tasks">See all tasks</Link>
              </li>
              <li>
                <Link to="/create-task">Create a new task</Link>
              </li>
            </ol>

            <hr />
            <Switch>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/tasks">
                <TasksList tasks={tasks} changeTask={handleTaskChange} />
              </Route>
              <Route path="/create-task">
                <TaskForm createNewTask={createNewTask} />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
