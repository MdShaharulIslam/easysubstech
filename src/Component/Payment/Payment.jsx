
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
  return (
    <div className="py-16 bg-gray-900 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Complete Your Payment
        </h2>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
