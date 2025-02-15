import { Link } from "react-router-dom";
import about from "../../../../src/assets/logo.png";

const About = () => {
  return (
    <section className="bg-white bg-opacity-5 py-16" id="about">
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          About Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="neon-container">
            <img
              src={about}
              alt="EasyTechMart Logo"
              className="mx-auto"
            />
          </div>

          {/* Description Section */}
          <div>
            <p>Hello, Dear friends, Welcome to EasySubTech! We're happy you want to know more about our site.</p>
            <p>People today are more dependent on online products and services, and we're here to help with that.</p>
            <p>Our goal is to provide you with the best solutions to your problems. If you ever don't find the answers you're looking for, feel free to leave a comment.</p>
            <p>We strive to deliver fresh and updated content that keeps you informed about the latest happenings in the world.</p>
            <p>If you have any further questions, feel free to reach out to us at <b>easysubstech@gmail.com</b>.</p>

            <h2><b>Our Goal</b></h2>
            <p>Our goal is simple: to provide 100% original, safe, and reliable content. In a world filled with fake information, we want to offer a trustworthy resource for tech enthusiasts and everyday users alike.</p>
            <p>We focus on cutting-edge electronic devices, delivering the latest updates on technology to ensure you stay ahead of the curve.</p>

            <h3><b>Our Service</b></h3>
            <p>We specialize in cutting-edge electronic devices, providing you with the latest trends and information. Visit us daily to stay up-to-date on the best tech!</p>
            <p>At EasySubTech, we bring you the most innovative gadgets at unbeatable prices, offering detailed content on the latest in tech. For more information about our categories, check out our homepage <Link to="https://www.easysubstech.com">here</Link>.</p>

            <p>We also offer a notification update service via email and on various social media platforms. Join us today for the latest updates!</p>

            <h3><b>About EasySubTech</b></h3>
            <p>As mentioned before, we are dedicated to providing cutting-edge electronic devices and related content. This website was created to offer accurate and useful information to tech lovers.</p>
            <p>EasySubTech's mission is to ensure that visitors no longer waste time searching for the right information. Our focus is on delivering high-quality content for a better user experience.</p>
            <p>Also, this page was generated with the help of <a href="https://soumyahelp.com">Soumya Help</a>.</p>

            <h3><b>Admin's Statement for EasySubTech</b></h3>
            <p>As the admin of EasySubTech, I firmly believe that too many users end up with misleading information online. Our website's primary goal is to offer 100% legit, accurate, and useful content, and I hope our efforts will one day help make the internet a better place for everyone.</p>

            <h3><b>Admin's Contact Information</b></h3>
            <p>My name is Yousuf Abdullah, and if you have any questions, concerns, or suggestions, feel free to reach out using the contact details below:</p>
            
            <center>
              <table>
                <tbody>
                  <tr>
                    <td>Name</td><td><strong>Yousuf Abdullah</strong></td>
                  </tr>
                  <tr>
                    <td>Email</td><td><strong>easysubstech@gmail.com</strong></td>
                  </tr>
                  <tr>
                    <td>Facebook</td><td><a href="https://www.facebook.com/yousufarjulove"><strong>Facebook</strong></a></td>
                  </tr>
                  <tr>
                    <td>Twitter</td><td><a href="https://x.com/yousufarjulove"><strong>Twitter</strong></a></td>
                  </tr>
                  <tr>
                    <td>Instagram</td><td><a href="https://Instagram.com/yousufarjulove"><strong>Instagram</strong></a></td>
                  </tr>
                </tbody>
              </table>
            </center>

            <p>These are my personal account details. If you'd like to get in touch, feel free to contact me through any of the platforms mentioned above.</p>

            <p>Thank you for visiting EasySubTech. We hope you find the information here valuable and helpful!</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-white text-center mb-6">
            Why Choose Us?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Latest Products", "Affordable Prices", "Fast Shipping", "Secure Transactions", "Customer Support", "Exclusive Deals"].map((feature, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded-lg shadow-md"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
