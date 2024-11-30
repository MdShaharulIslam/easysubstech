import bgImg from "../../../../public/bg.gif";

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
                  Discover the Perfect Place <br /> for Your{" "}
                  <span className="text-blue-500">Dream Products</span>
                </h1>
                <p className="mt-3 text-gray-600 dark:text-black">
                  Explore a wide range of high-quality products tailored to meet your
                  needs. From essentials to luxuries, find everything in one place at
                  unbeatable prices.
                </p>
                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl"
                src="https://merakiui.com/images/components/Catalogue-pana.svg"
                alt="Catalogue Illustration"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
