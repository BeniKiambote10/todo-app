import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditTask({ tasks, updateTask }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [id, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({ id, title, description });
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
}

export default EditTask;
