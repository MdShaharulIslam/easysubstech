import { useState, useEffect } from 'react';
import useAxiosSecure from '../useAxiosSecure';

const useAdmin = (user) => {
  const axiosSecure = useAxiosSecure();
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user?.email) return;

    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await axiosSecure.get(`/api/me/${user.email}`);
        setRole(response.data.role); 
      } catch (err) {
        setError(err.message || 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user?.email, axiosSecure]);

  return { role, loading, error };
};

export default useAdmin;
