import soundBoxImg from "../../../../src/assets/images1.jpeg";
import headphoneImg from "../../../../src/assets/image2.jpeg";
import microphoneImg from "../../../../src/assets/image3.jpeg";
import { Link } from "react-router-dom";
import ProductDynamic from "../Product/ProductDynamic";
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
              src={soundBoxImg}
              alt="Payment Processing"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
              Sound Box
              </h3>
              <p className="text-white mb-4 ">
              Experience superior sound quality with our premium sound box. Perfect for music enthusiasts, it delivers crystal-clear audio with deep bass.
              </p>
              
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white bg-opacity-10 shadow-lg rounded-lg overflow-hidden">
            <img
              src={headphoneImg}
              alt="Crypto Payments"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
              Headphone
              </h3>
              <p className="text-white mb-4">
              Immerse yourself in your favorite tunes with our noise-canceling headphones. Designed for comfort, they deliver unbeatable sound clarity.
              </p>
             
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white bg-opacity-10 shadow-lg rounded-lg overflow-hidden">
            <img
              src={microphoneImg}
              alt="Recurring Payments"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
              Microphone
              </h3>
              <p className="text-white mb-4">
              Record studio-quality audio with our professional-grade microphone. Ideal for content creators and professionals.
              </p>
              
            </div>
          </div>
        </div>

       
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
      <div>
        <ProductDynamic></ProductDynamic>
      </div>
    </section>
  );
};

export default Services;