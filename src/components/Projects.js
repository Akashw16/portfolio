import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="p-8 text-center">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="space-y-4 mt-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">PizzaQuick Serve</h3>
          <p>Technologies: Java, J2EE, Spring Boot, MySQL, React</p>
          <ul className="list-disc list-inside mt-2">
            <li>Streamlined order management and payment processing for a restaurant.</li>
            <li>Implemented secure authentication with Spring Security.</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Shortest Route Optimization</h3>
          <p>Technologies: Python, Graph Theory, Optimization Libraries</p>
          <ul className="list-disc list-inside mt-2">
            <li>Optimized truck delivery routes for cost-efficiency.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
