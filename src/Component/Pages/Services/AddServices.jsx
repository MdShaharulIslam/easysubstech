import { useState } from "react";
import axios from "axios";

const AddServices = () => {
  const [service, setService] = useState({
    productName: "",
    brand: "",
    description: "",
    salePrice: 0,
    image: "",
    category: "", // Added category field
  });
  const [loading, setLoading] = useState(false);

  const image_key = import.meta.env.VITE_IMAGE_KEY;
  const image_api = `https://api.imgbb.com/1/upload?key=${image_key}`;
  const backendURL = "https://easysubstech-server.vercel.app/services";

  // Handle form input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setService((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload separately
  const handleImageUpload = async (e) => {
    const imageFile = e.target.files[0];
    if (!imageFile) return;

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const response = await axios.post(image_api, formData);
      const imageUrl = response.data.data.display_url;
      setService((prev) => ({ ...prev, image: imageUrl }));
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error.message);
      alert("Failed to upload image. Please try again.");
    }
  };

  // Submit data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(backendURL, service);
      alert("Service added successfully!");
      setService({
        productName: "",
        brand: "",
        description: "",
        salePrice: 0,
        image: "",
        category: "", // Reset category field
      });
    } catch (error) {
      console.error("Error adding service:", error.message);
      alert("Failed to add service. Please try again.");
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
        <label className="block text-sm font-medium mb-1">Product Name</label>
        <input
          type="text"
          name="productName"
          value={service.productName}
          onChange={handleChange}
          className="w-full p-2 border text-black rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <label className="block text-sm font-medium mt-4">Brand</label>
        <input
          type="text"
          name="brand"
          value={service.brand}
          onChange={handleChange}
          className="w-full p-2 border text-black rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
        <label className="block text-sm font-medium mt-4">Description</label>
        <textarea
          name="description"
          value={service.description}
          onChange={handleChange}
          rows="4"
          className="w-full p-2 border text-black rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        ></textarea>
        <label className="block text-sm font-medium mt-4">Category</label>
        <select
          name="category"
          value={service.category}
          onChange={handleChange}
          className="w-full p-2 border text-black rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        >
          <option value="" disabled>Select a Category</option>
          <option value="Laptop">Laptop</option>
          <option value="Headphone">Headphone</option>
          <option value="Microphone">Microphone</option>
          <option value="Keyboard">Keyboard</option>
        </select>
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
            className="w-full p-2 border rounded-md text-black"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Upload Image</label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {service.image && (
        <div className="mt-4">
          <img
            src={service.image}
            alt="Uploaded"
            className="w-36 mx-auto rounded-md border"
          />
        </div>
      )}

      {/* Buttons */}
      <div className="mt-8 flex justify-end gap-4">
        <button
          type="button"
          onClick={() =>
            setService({
              productName: "",
              brand: "",
              description: "",
              salePrice: 0,
              image: "",
              category: "", // Reset category field
            })
          }
          className="px-4 py-2 border rounded-md hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className={`px-4 py-2 text-white rounded-md ${
            loading ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {loading ? "Publishing..." : "Publish"}
        </button>
      </div>
    </form>
  );
};

export default AddServices;