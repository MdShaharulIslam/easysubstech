// only admin can see this page


const AddServices = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white  dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl  font-bold mb-6">Create a New Product</h1>

      {/* General Information */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">General Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Product Name</label>
            <input
              type="text"
              placeholder="type Product Name"
              className="w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Brand</label>
            <input
              type="text"
              placeholder="Facebook/Youtube"
              className="w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <label className="block text-sm font-medium mt-4 mb-1">Description</label>
        <textarea
          rows="4"
          placeholder="Enter product description..."
          className="w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        ></textarea>

        <label className="block text-sm font-medium mt-4 mb-1">Availability</label>
        <ul className="list-disc pl-5">
          <li>We offer our customers a Cheap rate .</li>

        </ul>
      </div>

      {/* Price and Size */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Sale Price</label>
          <input
            type="number"
            placeholder="0$-1000$"
            className="w-full border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
       
      </div>


      {/* Product Images */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Product Images</h2>
        <div className="border-dashed border-2 border-gray-300 rounded-lg w-72 p-4">
          <p className="text-sm  text-gray-500">Drop your images or select to browse</p>
          <div className="  mt-4">
            <img
              src="https://via.placeholder.com/100"
              alt="Product"
              className="w-36 mx-auto  rounded-md border"
            />
          </div>
        </div>
      </div>



      {/* Buttons */}
      <div className="mt-8 flex justify-end gap-4">
        <button className="px-4 py-2 border rounded-md hover:bg-gray-100">Cancel</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
          Publish
        </button>
      </div>
    </div>
  );
};

export default AddServices;
