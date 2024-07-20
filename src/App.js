import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import TaskDetail from "./components/TaskDetails";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="container">
      <h1>To-Do List App</h1>
      <Routes>
        <Route
          path="/"
          element={<TaskList tasks={tasks} deleteTask={deleteTask} />}
        />
        <Route path="/add" element={<AddTask addTask={addTask} />} />
        <Route
          path="/edit/:id"
          element={<EditTask tasks={tasks} updateTask={updateTask} />}
        />
        <Route path="/task/:id" element={<TaskDetail tasks={tasks} />} />
      </Routes>
    </div>
  );
}

export default App;
