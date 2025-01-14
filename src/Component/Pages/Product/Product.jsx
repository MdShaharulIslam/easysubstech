
import soundBoxImg from "../../../../src/assets/images1.jpeg";
import headphoneImg from "../../../../src/assets/image2.jpeg";
import microphoneImg from "../../../../src/assets/image3.jpeg";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section className="py-16 bg-gray-900 dark:bg-gray-900" id="services">
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
  {/* Product 1: Sound Box */}
  <div className="bg-white bg-opacity-5 shadow-lg rounded-lg overflow-hidden dark:bg-opacity-10">
    <img
      src={soundBoxImg} // Replace with your sound box image URL or import
      alt="Sound Box"
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Sound Box</h3>
      <p className="text-white mb-4 dark:text-gray-400">
        Experience superior sound quality with our premium sound box. Perfect
        for music enthusiasts, it delivers crystal-clear audio with deep bass.
      </p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-semibold text-white">$300</span>
        <Link
          to="/payment"
          className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-400 dark:hover:bg-blue-600"
        >
          Buy Now
        </Link>
      </div>
    </div>
  </div>

  {/* Product 2: Headphone */}
  <div className="bg-white bg-opacity-5 shadow-lg rounded-lg overflow-hidden dark:bg-opacity-10">
    <img
      src={headphoneImg} // Replace with your headphone image URL or import
      alt="Headphone"
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Headphone</h3>
      <p className="text-white mb-4 dark:text-gray-400">
        Immerse yourself in your favorite tunes with our noise-canceling
        headphones. Designed for comfort, they deliver unbeatable sound clarity.
      </p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-semibold text-white">$200</span>
        <Link
          to="/payment"
          className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-400 dark:hover:bg-blue-600"
        >
          Buy Now
        </Link>
      </div>
    </div>
  </div>

  {/* Product 3: Microphone */}
  <div className="bg-white bg-opacity-5 shadow-lg rounded-lg overflow-hidden dark:bg-opacity-10">
    <img
      src={microphoneImg} // Replace with your microphone image URL or import
      alt="Microphone"
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-4">Microphone</h3>
      <p className="text-white mb-4 dark:text-gray-400">
        Record studio-quality audio with our professional-grade microphone.
        Ideal for content creators and professionals.
      </p>
      <div className="flex justify-between items-center mb-4">
        <span className="text-xl font-semibold text-white">$150</span>
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