import { useState, useEffect } from "react";

const useAdmin = (user) => {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/users");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const users = await response.json();
        const currentUser = users.find((u) => u.email === user?.email);

        if (currentUser) {
          setRole(currentUser.role);
        } else {
          setRole("user"); // Default role
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchRole();
    } else {
      setLoading(false);
    }
  }, [user]);

  return { role, loading, error };
};

export default useAdmin;
