import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-gradient-to-r from-pink-500 to-purple-400 text-white">
      <h2 className="text-4xl font-extrabold mb-6 text-center">My Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-yellow-300 to-orange-400">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">PizzaQuick Serve</h3>
          <p className="text-lg mb-4 text-gray-600">Technologies: Java, Spring Boot, MySQL, React</p>
          <ul className="list-disc list-inside text-left text-gray-700">
            <li>Developed an efficient ordering and payment system.</li>
            <li>Implemented secure authentication with Spring Security.</li>
            <li>Responsive frontend using React and backend with MySQL.</li>
          </ul>
        </div>
        {/* Project 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-yellow-300 to-orange-400">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Shortest Route Optimization</h3>
          <p className="text-lg mb-4 text-gray-600">Technologies: Python, Graph Theory</p>
          <ul className="list-disc list-inside text-left text-gray-700">
            <li>Optimized truck delivery routes for cost-efficiency.</li>
            <li>Used graph theory for accurate optimization.</li>
            <li>Published research in peer-reviewed journals.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
