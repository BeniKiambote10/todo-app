import React, { Component } from "react";

class TaskDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: null,
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    // Mock task data
    const task = {
      id,
      text: "Sample task",
    };
    this.setState({ task });
  }

  render() {
    const { task } = this.state;
    if (!task) return <div>Loading...</div>;

    return (
      <div>
        <h1>{task.text}</h1>
        {/* Implement edit functionality if needed */}
      </div>
    );
  }
}

export default TaskDetail;
