import { useState } from "react";
import { Link } from "react-router-dom";


const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("visa");
  const [email, setEmail] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    setMessage("");

    // Handle payment processing based on selected method (Visa or PayPal)
    if (paymentMethod === "visa") {
      // Process Visa payment logic here (e.g., Stripe payment processing)
      // For example, use the CardElement to process Visa payments
    } else if (paymentMethod === "paypal") {
      // Process PayPal payment logic here (use PayPal SDK or API)
    }

    setIsProcessing(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 shadow-lg rounded-lg bg-gray-100">
      <h2 className="text-xl font-bold text-center mb-4 text-black">Complete Your Payment</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black sm:text-sm"
          />
        </div>

        {/* Payment Method Dropdown */}
        <div className="mb-10">
          <label htmlFor="payment-method" className="block text-sm font-medium text-gray-700">
            Payment Method
          </label>
          <select
            id="payment-method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black sm:text-sm"
          >
            <option value="visa">Visa</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

       
       

        {/* Submit Button */}
        <Link to="/checkout" className="mt-6">
         <button
             className="w-full bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 disabled:opacity-50"
        >
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
         </Link>
        
      </form>

      {/* Message */}
      {message && (
        <div className="mt-4 text-center">
          <p className="text-gray-800">{message}</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;