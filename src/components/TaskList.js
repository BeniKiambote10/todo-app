import React from "react";
import { Link } from "react-router-dom";

function TaskList({ tasks, deleteTask }) {
  return (
    <div>
      <h2>Task List</h2>
      <Link to="/add">
        <button>Add Task</button>
      </Link>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.title}</Link>
            <Link to={`/edit/${task.id}`}>
              <button>Edit</button>
            </Link>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
