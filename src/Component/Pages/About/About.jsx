import { Link } from "react-router-dom";

const About = () => {
    return (
      <section className="bg-gray-100 py-16" id="about">
        <div className="container mx-auto px-4 lg:px-20">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
            About Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/300"
                alt="Your Name"
                className="rounded-full mx-auto w-60 h-60 border-4 border-blue-500 shadow-lg"
              />
            </div>
  
            {/* Description Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Hello , it's  BD Coins Pay
              </h3>
              <p className="text-gray-600 mb-4">
              BdCoinsPay.com is a modern and innovative e-commerce platform designed to provide a seamless shopping experience for customers seeking digital products and cryptocurrency-based payment solutions. Our platform focuses on delivering a secure, efficient, and user-friendly environment for online transactions.
              </p>
              <p className="text-gray-600 mb-4">
              At BdCoinsPay, we cater to the needs of tech-savvy consumers, offering a wide range of products and services tailored to meet the demands of the digital age. With a commitment to excellence, we ensure that every transaction is safe, fast, and reliable, making us a trusted choice for customers in Bangladesh and beyond.
              </p>
              <p className="text-gray-600 mb-4">
              Whether you're looking for cutting-edge digital goods or exploring cryptocurrency payment options, BdCoinsPay.com is here to make your shopping experience simple and hassle-free. Discover a new way of shopping that blends technology, convenience, and innovation—all in one place.
              </p>
              <div className="mt-6">
                <Link to="/contact" className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
  
          {/* Skills Section */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["React", "Tailwind CSS", "JavaScript", "MongoDB", "Node.js", "Express.js"].map(
                (skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded-lg shadow-md"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  