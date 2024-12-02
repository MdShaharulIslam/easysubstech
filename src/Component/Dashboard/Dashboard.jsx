import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";

import useAxiosPublic from "../Hooks/useAxiosPublic";

const Dashboard = () => {
  const [role, setRole] = useState(null); // "user" or "admin"
  const [loading, setLoading] = useState(true); // To handle loading state
  const navigate = useNavigate();

  useEffect(() => {
    // Mock role fetching, replace this with API or auth logic
    const userRole = localStorage.getItem("userRole"); // e.g., from auth token
    console.log(userRole);
    if (!userRole) {
      navigate("/login"); // Redirect to login if not authenticated
    }
    setRole(userRole);
  }, [navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {role === "admin" ? <AdminDashboard /> : <UserDashboard />}
    </div>
  );
};

export default Dashboard;
