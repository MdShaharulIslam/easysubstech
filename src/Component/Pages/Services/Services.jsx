import serv1 from "../../../../src/assets/payment-processing-101-header.jpg";
import serv2 from "../../../../src/assets/crypto.jpg";
import serv3 from "../../../../src/assets/recuring.png";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <section className=" py-16" id="services">
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="bg-white bg-opacity-10 shadow-lg rounded-lg overflow-hidden">
            <img
              src={serv1}
              alt="Payment Processing"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Payment Processing
              </h3>
              <p className="text-white mb-4 ">
                Secure and efficient payment solutions for businesses and individuals, supporting multiple currencies and global transactions.
              </p>
              <a
                href="#"
                className="text-blue-500 font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white bg-opacity-10 shadow-lg rounded-lg overflow-hidden">
            <img
              src={serv2}
              alt="Crypto Payments"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Crypto Payments
              </h3>
              <p className="text-white mb-4">
                Accept cryptocurrency payments with ease using our user-friendly interface, designed for modern businesses.
              </p>
              <a
                href="/contact"
                className="text-blue-500 font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white bg-opacity-10 shadow-lg rounded-lg overflow-hidden">
            <img
              src={serv3}
              alt="Recurring Payments"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Recurring Payments
              </h3>
              <p className="text-white mb-4">
                Automate subscription billing and recurring payments with our flexible and reliable solutions.
              </p>
              <Link 
                href="/contact"
                className="text-blue-500 font-semibold hover:underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Service */}
        <div className="mt-12 bg-white bg-opacity-10 p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Fraud Prevention & Security
          </h3>
          <p className="text-white mb-4">
            Protect your transactions with advanced fraud detection and encryption technologies, ensuring peace of mind for your business.
          </p>
          <Link
            to="/ReturnPolice"
            className="text-blue-500 font-semibold hover:underline"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
