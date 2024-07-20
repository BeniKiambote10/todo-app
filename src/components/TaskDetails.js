import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function TaskDetail({ tasks }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((task) => task.id === id);

  if (!task) return <div>Task not found</div>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default TaskDetail;
