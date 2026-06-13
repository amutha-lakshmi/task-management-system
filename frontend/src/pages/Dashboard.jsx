import { useNavigate, Link } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="dashboard">

      <div className="navbar">
        <h2>Task Manager</h2>

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
          Role: {user?.role}
        </h3>
      </div>

      <div className="menu">

        <div className="card">
          <Link to="/create-task">
            Create Task
          </Link>
        </div>

        <div className="card">
          <Link to="/tasks">
            My Tasks
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;