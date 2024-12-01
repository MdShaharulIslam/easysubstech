
import serv1 from "../../../../src/assets/download.jpg";
import serv2 from "../../../../src/assets/youtube.avif";
import serv3 from "../../../../src/assets/monitizaton.jpg";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section className="py-16 bg-gray-900 dark:bg-gray-900" id="services">
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="bg-white bg-opacity-5 shadow-lg rounded-lg overflow-hidden dark:bg-opacity-10">
            <img
              src={serv1}
              alt="Facebook Boosting"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Facebook Boosting
              </h3>
              <p className="text-white mb-4 dark:text-gray-400">
                Enhance your business visibility on Facebook with targeted
                boosting. Reach more users and increase engagement with our
                service.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold text-white">$100</span>
                <Link
                  to="/payment"
                  className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-400 dark:hover:bg-blue-600"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white bg-opacity-10 shadow-lg rounded-lg overflow-hidden dark:bg-opacity-10">
            <img
              src={serv2}
              alt="YouTube Subscription"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                YouTube Subscription
              </h3>
              <p className="text-white mb-4 dark:text-gray-400">
                Get exclusive access to premium content and enhance your channel
                engagement. Join now for a special price!
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold text-white">$120</span>
                <Link
                  to="/payment"
                  className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-400 dark:hover:bg-blue-600"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white bg-opacity-10 shadow-lg rounded-lg overflow-hidden dark:bg-opacity-10">
            <img
              src={serv3}
              alt="Facebook Page Monetization"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">
                Facebook Page Monetization
              </h3>
              <p className="text-white mb-4 dark:text-gray-400">
                Unlock the potential of your Facebook page by enabling
                monetization, offering new ways to generate revenue from your
                content.
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold text-white">$450</span>
                <Link
                  to="/payment"
                  className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-400 dark:hover:bg-blue-600"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
