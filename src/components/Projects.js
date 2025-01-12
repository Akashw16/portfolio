import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-200 py-16 text-center fade-in">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="max-w-4xl mx-auto">
        {/* Project 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-4">PizzaQuick Serve</h3>
          <p className="text-lg mb-4">Technologies: Java, J2EE, Spring Boot, MySQL, React</p>
          <ul className="list-disc list-inside">
            <li>Streamlined order management and payment processing for a restaurant.</li>
            <li>Implemented secure authentication with Spring Security.</li>
            <li>Responsive frontend using React and managed backend with MySQL.</li>
          </ul>
        </div>
        {/* Project 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <h3 className="text-2xl font-semibold mb-4">Shortest Route Optimization</h3>
          <p className="text-lg mb-4">Technologies: Python, Graph Theory, Optimization Libraries</p>
          <ul className="list-disc list-inside">
            <li>Optimized truck delivery routes for cost-efficiency and timeliness.</li>
            <li>Used graph theory and Min-Max Scaler for accuracy.</li>
            <li>Published research in peer-reviewed journals.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
