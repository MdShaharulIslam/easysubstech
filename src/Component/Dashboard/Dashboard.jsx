import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import useAdmin from "../Hooks/useAdmin/useAdmin";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  const { role, loading, error } = useAdmin(user);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {role === "admin" ? <AdminDashboard /> : <UserDashboard />}
    </div>
  );
};

export default Dashboard;
