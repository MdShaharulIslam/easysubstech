import { useState, useEffect } from "react";
import useAuth from "../Hooks/useAuth";

const UserDashboard = () => {
  const { user } = useAuth(); // Get the current authenticated user's information
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user || !user.email) {
      setError("User is not authenticated");
      setLoading(false);
      return;
    }

    const fetchUserInfo = async () => {
      try {
        const response = await fetch("http://localhost:5000/users"); // API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch user information");
        }
        const data = await response.json();

        // Find the authenticated user's data
        const currentUser = data.find((u) => u.email === user.email);

        if (currentUser) {
          setUserInfo(currentUser);
        } else {
          throw new Error("User not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [user]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>
      <div className=" shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold">Your Profile</h2>
        <p className="mt-2">Name: {userInfo.name}</p>
        <p>Email: {userInfo.email}</p>
        <p>Subscription: {userInfo.subscriptionStatus}</p>
      </div>
    </div>
  );
};

export default UserDashboard;
