import { useState } from "react";
import { Link } from "react-router-dom";



const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-0"
        } transition-all duration-300 bg-gray-800 text-white overflow-hidden`}
      >
        <div className="p-6">
          <h1 className="text-xl font-bold mb-4">Admin Panel</h1>
          <nav>
            <ul className="space-y-2">
          
            <Link
                  to="/TermsAndConditions"
                  className="block px-4 py-2 rounded hover:bg-gray-700"
                >
                  Terms & Condition
                </Link>
            <Link
                  to="/ReturnPolice"
                  className="block px-4 py-2 rounded hover:bg-gray-700"
                >
                 Privacy Policy & Refound
                </Link>
            <Link
                  to="/AddServices"
                  className="block px-4 py-2 rounded hover:bg-gray-700"
                >
                 AddServices
                </Link>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        <header className="bg-white shadow-md p-4 flex items-center justify-between">
          <button
            className="text-gray-800 bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
          </button>
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
        </header>
        <main className="p-6">
          
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
              