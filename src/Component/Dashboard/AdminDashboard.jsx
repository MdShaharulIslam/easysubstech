import { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    // Mock fetch, replace with your API call
    const fetchPayments = async () => {
      const mockPayments = [
        { id: 1, user: "John Doe", amount: "$50", date: "2024-12-01" },
        { id: 2, user: "Jane Smith", amount: "$100", date: "2024-11-30" },
      ];
      setPayments(mockPayments);
    };

    fetchPayments();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Payment History</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">User</th>
              <th className="border px-4 py-2">Amount</th>
              <th className="border px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td className="border px-4 py-2">{payment.user}</td>
                <td className="border px-4 py-2">{payment.amount}</td>
                <td className="border px-4 py-2">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
