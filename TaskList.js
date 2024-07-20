import React, { Component } from "react";
import { Link } from "react-router-dom";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: "",
    };
  }

  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  handleAdd = () => {
    const newTask = {
      id: Date.now(),
      text: this.state.newTask,
    };
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
      newTask: "",
    }));
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newTask}
          onChange={this.handleChange}
          placeholder="New task"
        />
        <button onClick={this.handleAdd}>Add</button>
        <ul>
          {this.state.tasks.map((task) => (
            <li key={task.id}>
              <Link to={`/task/${task.id}`}>{task.text}</Link>
              <button onClick={() => this.handleDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
