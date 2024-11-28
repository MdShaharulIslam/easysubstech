import { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "creditCard",
  });

  const [orderSummary, setOrderSummary] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the product details to the order summary
    const newOrder = {
      name: formData.name,
      address: `${formData.address}, ${formData.city}, ${formData.postalCode}, ${formData.country}`,
      paymentMethod: formData.paymentMethod,
      total: "$100.00", // For demonstration, you can replace this with dynamic pricing
    };

    setOrderSummary([...orderSummary, newOrder]);

    // Clear the form
    setFormData({
      name: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
      paymentMethod: "creditCard",
    });

    alert("Order added to summary!");
  };

  return (
    <div className="min-h-screen py-10 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shipping Details */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 shadow-md rounded-lg"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Shipping Details
            </h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg text-black"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg text-black"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 font-semibold mb-2"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg  text-black"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="city"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg  text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="postalCode"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg  text-black"
                />
              </div>
            </div>
            <div className="mb-4 mt-4">
              <label
                htmlFor="country"
                className="block text-gray-700 font-semibold mb-2"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border rounded-lg  text-black"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Payment Method
              </label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg text-black"
              >
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bankTransfer">Bank Transfer</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-600 transition duration-200"
            >
              Place Order
            </button>
          </form>

          {/* Order Summary */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-black mb-4">
              Order Summary
            </h2>
            {orderSummary.length === 0 ? (
              <p className="text-black">No orders yet. Fill the form and place an order!</p>
              
            ) : (
              orderSummary.map((order, index) => (
                <div
                  key={index}
                  className="border-b pb-4 mb-4 border-gray-300"
                >
                  <p>
                    <strong>Name:</strong> {order.name}
                  </p>
                  <p>
                    <strong>Address:</strong> {order.address}
                  </p>
                  <p>
                    <strong>Payment:</strong> {order.paymentMethod}
                  </p>
                  <p>
                    <strong>Total:</strong> {order.total}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
