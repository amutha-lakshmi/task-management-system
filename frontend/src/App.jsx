import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";
import CreateTask from "./pages/CreateTask";
import MyTasks from "./pages/MyTasks";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
path="/create-task"
element={
<ProtectedRoute>
<CreateTask/>
</ProtectedRoute>
}
/>

<Route
path="/tasks"
element={
<ProtectedRoute>
<MyTasks/>
</ProtectedRoute>
}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;