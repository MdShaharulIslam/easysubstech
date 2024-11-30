import bgImg from "../../../../public/bg.gif";
import heroImg from "../../../../public/hero.png";

const Home = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      <header
        className="bg-cover bg-center bg-no-repeat bg-white dark:bg-gray-900"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg bg-white bg-opacity-75 p-6 rounded-lg shadow-md">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Secure & Reliable Payments Made Easy 
                  <span className="text-blue-500">with CoinsPaid </span>
                </h1>
                <p className="mt-3 text-gray-600 dark:text-black">
                Your trusted platform for seamless global transactions. With SSL-certified security, transparent policies, and integrated payment solutions, CoinsPaid ensures every transaction is swift, safe, and hassle-free.
                </p>
                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500">
                Get Started Now
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl"
                src={heroImg}
                alt="Image"
              />
            </div>
          </div>
        </div>
      </header>
      <section className="py-16 bg-white dark:bg-gray-900">
  <div className="container px-6 mx-auto text-center">
    <h2 className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl">
      Why Choose <span className="text-blue-500">bdCoinsPaid?</span>
    </h2>
    <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-3">
      <div
        className="p-6 bg-gray-100 rounded-lg shadow dark:bg-gray-800 animate-fade-in-up"
      >
        <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
          Global Accessibility
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Conduct transactions effortlessly across the globe with integrated currency conversion.
        </p>
      </div>
      <div
        className="p-6 bg-gray-100 rounded-lg shadow dark:bg-gray-800 animate-fade-in-up"
        style={{ animationDelay: "0.2s" }}
      >
        <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
          Secure Payments
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Ensure top-notch security with SSL certification and fraud prevention.
        </p>
      </div>
      <div
        className="p-6 bg-gray-100 rounded-lg shadow dark:bg-gray-800 animate-fade-in-up"
        style={{ animationDelay: "0.4s" }}
      >
        <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
          Transparent Policies
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Clear and fair terms, refund options, and customer-first commitment.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="py-16 bg-gray-50 dark:bg-gray-800">
  <div className="container px-6 mx-auto">
    <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white lg:text-3xl">
      Explore Our <span className="text-blue-500">Unique Features</span>
    </h2>
    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4">
      {[
        { title: "Multi-Currency Support", description: "Transact in multiple currencies seamlessly." },
        { title: "Fast Transactions", description: "Enjoy lightning-speed payments and transfers." },
        { title: "24/7 Support", description: "Round-the-clock assistance for all your needs." },
        { title: "User-Friendly Interface", description: "A simple yet powerful design for effortless use." },
      ].map((feature, index) => (
        <div
          key={index}
          className="p-6 text-center bg-white rounded-lg shadow-md dark:bg-gray-900"
        >
          <h3 className="text-lg font-semibold text-gray-700 dark:text-white">{feature.title}</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


    </div>
  );
};

export default Home;
