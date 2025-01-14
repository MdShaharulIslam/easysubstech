import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductDynamic = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("https://easysubstech-server.vercel.app/services");
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

  // Group products by category
  const groupedServices = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  return (
    <div className="px-4 py-10 lg:px-20">
      {Object.keys(groupedServices).map((category) => (
        <section key={category} className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
            {category} Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {groupedServices[category].map((service) => (
              <div
                key={service.id}
                className="bg-white bg-opacity-5 shadow-lg rounded-lg overflow-hidden dark:bg-opacity-10"
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
                    {service.description.split(" ").slice(0, 15).join(" ")}
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
        </section>
      ))}
    </div>
  );
};

export default ProductDynamic;