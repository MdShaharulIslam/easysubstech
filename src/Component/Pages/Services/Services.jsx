

const Services = () => {
  return (
    <section className="bg-gray-50 py-16" id="services">
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Service 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Web Development
              </h3>
              <p className="text-gray-600 mb-4">
                We offer cutting-edge web development services, including front-end and back-end solutions for a fully integrated and responsive web experience.
              </p>
              <a
                href="/contact"
                className="text-blue-500 font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Service 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Mobile App Development
              </h3>
              <p className="text-gray-600 mb-4">
                Our expert team builds seamless mobile applications that provide users with an intuitive experience, whether for iOS or Android platforms.
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
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/400x250"
              alt="Service 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                E-commerce Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                We help businesses expand online by providing custom e-commerce solutions, including store design, payment gateway integration, and product management.
              </p>
              <a
                href="/contact"
                className="text-blue-500 font-semibold hover:underline"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Service 4 */}
        <div className="mt-12 bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Digital Marketing
          </h3>
          <p className="text-gray-600 mb-4">
            Our digital marketing services include SEO, PPC, social media marketing, and content marketing to help your business reach and engage with a wider audience.
          </p>
          <a
            href="/contact"
            className="text-blue-500 font-semibold hover:underline"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
