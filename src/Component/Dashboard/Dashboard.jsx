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
    // Function to fetch user role from the server
    const fetchUserRole = async () => {
      try {
        const token = localStorage.getItem("jwtToken"); // Retrieve JWT token from localStorage
        if (!token) {
          // If no token, redirect to login page
          navigate("/login");
          return;
        }

        // Fetch user role from server (Replace with your actual API endpoint)
        const response = await useAxiosPublic.get("/users/role", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { role: userRole } = response.data;
        setRole(userRole);
        setLoading(false); // Stop loading once we have the role
      } catch (error) {
        console.error("Error fetching user role:", error);
        navigate("/login"); // Redirect to login if there's an error (e.g., token expired)
      }
    };

    fetchUserRole();
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
