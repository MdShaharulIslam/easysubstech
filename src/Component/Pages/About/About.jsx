import { Link } from "react-router-dom";
import about from "../../../../public/Add a heading.png";
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
              Welcome to EasySubsTech
            </h3>
            <p className="text-white mb-4">
              At <span className="font-medium te">EasySubsTech,</span> we are committed to transforming the way you grow and manage your social media presence. As a trusted platform for boosting services on Facebook, YouTube, and other major social platforms, we provide cutting-edge solutions to help individuals, creators, and businesses achieve their digital growth goals.
            </p>
            <p className="text-white mb-4">
              Our comprehensive services are designed to increase engagement, amplify visibility, and establish your brand in the competitive world of social media. Whether you're aiming to gain more followers, enhance video views, or promote your content, <span className="font-medium te">EasySubsTech</span>  ensures a seamless and secure experience tailored to your unique needs.
            </p>
            <p className="text-white mb-4">
              What sets us apart is our dedication to innovation and user satisfaction. With advanced tools, expert support, and detailed analytics, we empower users to make data-driven decisions and maximize their growth potential. At <span className="font-medium te">EasySubsTech,</span>  we prioritize trust, reliability, and efficiency, making us the go-to platform for anyone looking to thrive in the ever-evolving digital landscape.

              Join us on the journey to success, and let’s boost your online presence together!
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
              
              "Fast Work",
              "Refound System",
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
