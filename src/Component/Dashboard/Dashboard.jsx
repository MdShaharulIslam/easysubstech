import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";

const Dashboard = () => {
  const [role, setRole] = useState(null); // "user" or "admin"
  const navigate = useNavigate();

  useEffect(() => {
    // Mock role fetching, replace this with API or auth logic
    const userRole = localStorage.getItem("userRole"); // e.g., from auth token
    if (!userRole) {
      navigate("/login"); // Redirect to login if not authenticated
    }
    setRole(userRole);
  }, [navigate]);

  if (!role) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {role === "admin" ? <AdminDashboard /> : <UserDashboard />}
    </div>
  );
};

export default Dashboard;
