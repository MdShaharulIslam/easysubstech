import  { useState } from "react";
import axios from "axios";

const AddServices = () => {
  const [service, setService] = useState({
    productName: "",
    brand: "",
    description: "",
    salePrice: 0,
    image: "",
  });

  const [loading, setLoading] = useState(false);

  const image_key = import.meta.env.VITE_IMAGE_KEY;
  const image_api = `https://api.imgbb.com/1/upload?key=${image_key}`;

  // Handle Form Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setService({ ...service, [name]: value });
  };

  // Handle Image Upload
  const handleImageUpload = async (e) => {
    const imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await axios.post(image_api, formData);
      setService({ ...service, image: response.data.data.display_url });
    } catch (error) {
      console.error("Image upload failed:", error.message);
    }
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const backendURL = "http://localhost:5000/services"; // Update this to your live server URL if deployed

    try {
      const response = await axios.post(backendURL, service);
      alert("Service added successfully!");
      console.log(response);
      setService({ productName: "", brand: "", description: "", salePrice: 0, image: "" });
    } catch (error) {
      console.error("Error adding service:", error.message);
      alert("Failed to add service.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <h1 className="text-2xl font-bold mb-6">Create a New Product</h1>

      {/* General Information */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">General Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Product Name</label>
            <input
              type="text"
              name="productName"
              value={service.productName}
              onChange={handleChange}
              placeholder="Type Product Name"
              className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Brand</label>
            <input
              type="text"
              name="brand"
              value={service.brand}
              onChange={handleChange}
              placeholder="Facebook/Youtube"
              className="w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        <label className="block text-sm font-medium mt-4 mb-1">Description</label>
        <textarea
          name="description"
          value={service.description}
          onChange={handleChange}
          rows="4"
          placeholder="Enter product description..."
          className="w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        ></textarea>
      </div>

      {/* Price and Image Upload */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Sale Price</label>
          <input
            type="number"
            name="salePrice"
            value={service.salePrice}
            onChange={handleChange}
            placeholder="0$-1000$"
            className="w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Upload Image</label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
      </div>

      {service.image && (
        <div className="mt-4">
          <img src={service.image} alt="Uploaded" className="w-36 mx-auto rounded-md border" />
        </div>
      )}

      {/* Buttons */}
      <div className="mt-8 flex justify-end gap-4">
        <button
          type="button"
          onClick={() => setService({ productName: "", brand: "", description: "", salePrice: 0, image: "" })}
          className="px-4 py-2 border rounded-md hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 text-white rounded-md ${loading ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"}`}
        >
          {loading ? "Publishing..." : "Publish"}
        </button>
      </div>
    </form>
  );
};

export default AddServices;
