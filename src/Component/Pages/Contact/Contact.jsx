import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out. We'll get back to you soon!");
    console.log("Message Sent:", formData);
  };

  return (
    <section className="bg-gray-100 py-16" id="contact">
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Contact Us
        </h2>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Wed love to hear from you
            </h3>
            <p className="text-gray-600 mb-6">
              Fill out the form below and well get back to you as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg text-black"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg text-black"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg text-black"
                  rows="4"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-600 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Contact Information
            </h3>
            <div className="mb-4">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> info@yourdomain.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> 123 Main Street, City, Country
              </p>
            </div>

            <div className="mt-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/yourbusiness"
                  className="text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                <a
                  href="https://twitter.com/yourbusiness"
                  className="text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com/company/yourbusiness"
                  className="text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            Find Us on the Map
          </h3>
          <div className="relative w-full h-72">
            <iframe
              src="https://www.google.com/maps/embed?pb=...your-google-map-embed-code..."
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: "0" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
