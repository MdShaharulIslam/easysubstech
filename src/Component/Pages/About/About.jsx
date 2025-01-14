import { Link } from "react-router-dom";
import about from "../../../../src/assets/logo.png";

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
              alt="EasyTechMart Logo"
              className="mx-auto"
            />
          </div>

          {/* Description Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Welcome to EasySubTech
            </h3>
            <p className="text-white mb-4">
              At <span className="font-medium">EasySubTech,</span> we specialize in providing cutting-edge electronic devices to meet the needs of tech enthusiasts, professionals, and everyday users. Our mission is to bring you the latest and most innovative gadgets at unbeatable prices.
            </p>
            <p className="text-white mb-4">
              From smartphones and laptops to smart home devices and accessories, <span className="font-medium">EasyTechMart</span> offers a comprehensive range of products designed to enhance your digital lifestyle. Whether you are upgrading your workspace, gaming setup, or home entertainment, we have the perfect solution for you.
            </p>
            <p className="text-white mb-4">
              What sets us apart is our commitment to quality, reliability, and customer satisfaction. We partner with leading brands to ensure that every product in our catalog meets the highest standards. With fast shipping, secure payments, and exceptional customer support, <span className="font-medium">EasyTechMart</span> is your trusted partner for all things tech.
            </p>
            <div className="mt-6">
              <Link
                to="/services"
                className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
              >
                Shop Now
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
            {["Latest Products", "Affordable Prices", "Fast Shipping", "Secure Transactions", "Customer Support", "Exclusive Deals"].map((feature, index) => (
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