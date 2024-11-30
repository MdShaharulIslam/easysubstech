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
    <section className=" py-16" id="contact">
  <div className="container mx-auto px-4 lg:px-20">
    <h2 className="text-3xl font-bold text-white text-center mb-8">Contact Us</h2>

    {/* Contact Form Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="bg-transparent p-8 border border-gray-300 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-white mb-4">We would love to hear from you</h3>
        <p className="text-white mb-6">
          Fill out the form below, and we’ll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white font-medium mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 bg-transparent"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-medium mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 bg-transparent"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 bg-transparent"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="bg-transparent p-8 border border-gray-300 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-white mb-4">Our Contact Information</h3>
        <div className="mb-4">
          <p className="text-white mb-2"><strong>Email:</strong> info@yourdomain.com</p>
          <p className="text-white mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p className="text-white"><strong>Address:</strong> 123 Main Street, City, Country</p>
        </div>

        <div className="mt-6">
          <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/yourbusiness"
              className="text-white hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/yourbusiness"
              className="text-white hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/company/yourbusiness"
              className="text-white hover:text-blue-700"
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
      <h3 className="text-xl font-medium text-white text-center mb-4">Find Us on the Map</h3>
      <div className="relative w-full h-72 border border-gray-300 rounded-lg overflow-hidden">
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
