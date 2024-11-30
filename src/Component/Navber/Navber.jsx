import { useState } from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="relative bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          {/* Logo */}
          <div className="flex items-center justify-between">
            <a href="#">
              <img className="w-auto h-12" src={"/public/logo.png"} alt="Logo" />
            </a>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Menu items */}
          <div
            className={`flex-col md:flex md:flex-row md:items-center absolute md:relative bg-white dark:bg-gray-800 left-0 w-full md:w-auto px-6 md:px-0 transition-transform duration-300 ease-in-out ${
              isOpen ? "flex opacity-100" : "hidden"
            } md:flex`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <Link
                to="/"
                className="my-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 md:mx-4 md:my-0 transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/services"
                className="my-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 md:mx-4 md:my-0 transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                to="/about"
                className="my-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 md:mx-4 md:my-0 transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="my-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 md:mx-4 md:my-0 transition-colors duration-300"
              >
                Contact Us
              </Link>
              <Link
                to="/checkout"
                className="my-2 text-gray-700 dark:text-gray-200 hover:text-blue-500 md:mx-4 md:my-0 transition-colors duration-300"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navber;
