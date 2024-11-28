const About = () => {
    return (
      <section className="bg-gray-100 py-16" id="about">
        <div className="container mx-auto px-4 lg:px-20">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
            About Me
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="text-center">
              <img
                src="https://via.placeholder.com/300"
                alt="Your Name"
                className="rounded-full mx-auto w-60 h-60 border-4 border-blue-500 shadow-lg"
              />
            </div>
  
            {/* Description Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Hi, Im Shaharul Islam
              </h3>
              <p className="text-gray-600 mb-4">
                Im a passionate frontend developer with experience in building
                visually appealing and user-friendly web applications. I enjoy
                turning complex ideas into simple and elegant designs. With a
                strong foundation in React and Tailwind CSS, I aim to create
                applications that are not just functional but also delightful to
                use.
              </p>
              <p className="text-gray-600 mb-4">
                Currently, Im exploring advanced concepts in web development,
                including Next.js, dynamic routing, and integrating APIs. My
                favorite project so far is the *Medical Camp Web Application*, a
                tool that simplifies the management of medical camps.
              </p>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
  
          {/* Skills Section */}
          <div className="mt-12">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-6">
              Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["React", "Tailwind CSS", "JavaScript", "MongoDB", "Node.js", "Express.js"].map(
                (skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded-lg shadow-md"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  