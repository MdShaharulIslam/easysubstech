const UserDashboard = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold">Your Profile</h2>
          <p className="mt-2">Name: John Doe</p>
          <p>Email: johndoe@example.com</p>
          <p>Subscription: Active</p>
        </div>
      </div>
    );
  };
  
  export default UserDashboard;
  