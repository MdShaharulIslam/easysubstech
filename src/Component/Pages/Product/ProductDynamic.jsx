import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductDynamic = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:5000/services");
        if (!response.ok) {
          throw new Error("Failed to fetch services");
        }
        const data = await response.json();
        setServices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mx-16">
      {services.map((service) => (
        <div
          key={service.id}
          className="shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 "
        >
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 bg-transparent">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              {service.productName}
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                ${service.salePrice}
              </span>
              <Link
                to="/payment"
                className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-400 dark:hover:bg-blue-600"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDynamic;
