import { Link } from "react-router-dom";
import about from "../../../../public/2.png";
const About = () => {
  return (
    <section className="bg-white bg-opacity-5 py-16" id="about">
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          About Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="neon-container">
            <img
              src={about}
              alt="bdCoinsPaid Logo"
              className="mx-auto"
            />
          </div>

          {/* Description Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Welcome to bdCoinsPaid
            </h3>
            <p className="text-white mb-4">
              At **bdCoinsPaid**, we redefine digital transactions by providing secure, efficient, and user-friendly payment solutions tailored to meet the needs of modern consumers. Our platform supports cryptocurrency payments, making global transactions seamless for businesses and individuals.
            </p>
            <p className="text-white mb-4">
              Whether you are paying bills, shopping online, or managing subscription payments, **bdCoinsPaid** ensures every transaction is encrypted, fast, and reliable. With a focus on innovation, we empower users to transact confidently and explore new digital possibilities.
            </p>
            <p className="text-white mb-4">
              Our services are designed for businesses and individuals seeking a smarter way to handle payments, offering tools like recurring payments, crypto wallets, and advanced fraud prevention.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-white text-center mb-6">
            Why Choose Us?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Crypto Payments",
              "Recurring Payments",
              "Fraud Prevention",
              "Global Reach",
              "Secure Transactions",
              "User-Friendly Interface",
            ].map((feature, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded-lg shadow-md"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
