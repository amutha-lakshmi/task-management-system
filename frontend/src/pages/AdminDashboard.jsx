import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function AdminDashboard() {

  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalTasks: 0,
    completedTasks: 0,
    pendingTasks: 0,
  });

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {

      const res = await API.get(
        "/admin/dashboard"
      );

      setStats(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="dashboard">

      <div className="navbar">
        <h2>Admin Panel</h2>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <div className="welcome-card">
        <h1>
          Welcome {user?.name}
        </h1>

        <h3>
          System Administrator
        </h3>
      </div>

      <div className="stats">

        <div className="stat-card">
          <h2>Total Users</h2>
          <h1>
            {stats.totalUsers}
          </h1>
        </div>

        <div className="stat-card">
          <h2>Total Tasks</h2>
          <h1>
            {stats.totalTasks}
          </h1>
        </div>

        <div className="stat-card">
          <h2>Completed</h2>
          <h1>
            {stats.completedTasks}
          </h1>
        </div>

        <div className="stat-card">
          <h2>Pending</h2>
          <h1>
            {stats.pendingTasks}
          </h1>
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;