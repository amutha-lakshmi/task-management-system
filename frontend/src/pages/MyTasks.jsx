import { useEffect, useState } from "react";
import API from "../services/api";

function MyTasks() {

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const updateStatus = async (id, status) => {
    try {

      await API.put(`/tasks/${id}`, {
        status,
      });

      fetchTasks();

    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {

      await API.delete(`/tasks/${id}`);

      fetchTasks();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="tasks-page">

      <h1>My Tasks</h1>

      <div className="tasks-grid">

        {tasks.map((task) => (

          <div
            className="task-box"
            key={task._id}
          >

            <h2>{task.title}</h2>

            <p>{task.description}</p>

            <span
              className={
                task.status === "Completed"
                  ? "completed"
                  : "pending"
              }
            >
              {task.status}
            </span>

            <select
              value={task.status}
              onChange={(e) =>
                updateStatus(
                  task._id,
                  e.target.value
                )
              }
            >
              <option value="Pending">
                Pending
              </option>

              <option value="Completed">
                Completed
              </option>
            </select>

            <p className="task-date">
              Created:
              {" "}
              {new Date(
                task.createdAt
              ).toLocaleDateString()}
            </p>

            <button
              onClick={() =>
                deleteTask(task._id)
              }
            >
              Delete Task
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default MyTasks;