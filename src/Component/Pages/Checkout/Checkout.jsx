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

    const newOrder = {
      name: formData.name,
      address: `${formData.address}, ${formData.city}, ${formData.postalCode}, ${formData.country}`,
      paymentMethod: formData.paymentMethod,
      total: "$100.00",
    };

    setOrderSummary([...orderSummary, newOrder]);

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
    <div className="min-h-screen py-10 bg-transparent text-white">
      <div className="container mx-auto px-4 lg:px-20">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shipping Details */}
          <form
            onSubmit={handleSubmit}
            className="bg-transparent p-6 shadow-lg rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-400 bg-transparent rounded-lg text-white placeholder-gray-400"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-400 bg-transparent rounded-lg text-white placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block font-semibold mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-400 bg-transparent rounded-lg text-white placeholder-gray-400"
                placeholder="Enter your address"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block font-semibold mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-400 bg-transparent rounded-lg text-white placeholder-gray-400"
                  placeholder="City"
                />
              </div>
              <div>
                <label htmlFor="postalCode" className="block font-semibold mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-400 bg-transparent rounded-lg text-white placeholder-gray-400"
                  placeholder="Postal Code"
                />
              </div>
            </div>
            <div className="mb-4 mt-4">
              <label htmlFor="country" className="block font-semibold mb-2">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-400 bg-transparent rounded-lg text-white placeholder-gray-400"
                placeholder="Country"
              />
            </div>
            <div className="mb-6">
              <label className="block font-semibold mb-2">Payment Method</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-400 bg-transparent rounded-lg text-white"
              >
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bankTransfer">Bank Transfer</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-700 transition duration-200"
            >
              Place Order
            </button>
          </form>

          {/* Order Summary */}
          <div className="bg-transparent p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            {orderSummary.length === 0 ? (
              <p>No orders yet. Fill the form and place an order!</p>
            ) : (
              orderSummary.map((order, index) => (
                <div key={index} className="border-b pb-4 mb-4 border-gray-500">
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
