import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function CreateTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/tasks", {
        title,
        description,
        status,
      });

      alert("Task Created Successfully");

      navigate("/tasks");
    } catch (error) {
      console.log(error);
      alert("Failed to create task");
    }
  };

  return (
    <div className="task-page">
      <div className="task-card">

        <h1>Create New Task</h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter Task Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            required
          />

          <textarea
            placeholder="Enter Task Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            required
          />

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >
            <option value="Pending">
              Pending
            </option>

            <option value="Completed">
              Completed
            </option>
          </select>

          <button type="submit">
            Create Task
          </button>

        </form>

      </div>
    </div>
  );
}

export default CreateTask;