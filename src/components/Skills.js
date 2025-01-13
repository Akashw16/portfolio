import React from "react";
import { FaJava, FaDatabase, FaCloud, FaGitAlt, FaCode } from "react-icons/fa"; // Import icons

const Skills = () => {
  return (
    <section
      id="skills"
      className="p-8 bg-gradient-to-r from-gray-800 to-gray-900 text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Skill 1 - Java & Spring Boot */}
        <div className="p-6 bg-gray-700 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-center mb-3">
            <FaJava className="text-4xl text-yellow-500" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Java & Spring Boot</h3>
          <p className="text-lg">Building robust backend systems and scalable applications.</p>
        </div>

        {/* Skill 2 - REST API Development */}
        <div className="p-6 bg-gray-700 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-center mb-3">
            <FaCode className="text-4xl text-green-500" />
          </div>
          <h3 className="text-xl font-semibold mb-3">REST API Development</h3>
          <p className="text-lg">Designing and implementing secure and efficient APIs.</p>
        </div>

        {/* Skill 3 - MySQL */}
        <div className="p-6 bg-gray-700 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-center mb-3">
            <FaDatabase className="text-4xl text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold mb-3">MySQL</h3>
          <p className="text-lg">Managing relational databases and ensuring optimal performance.</p>
        </div>

        {/* Skill 4 - AWS EC2 */}
        <div className="p-6 bg-gray-700 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-center mb-3">
            <FaCloud className="text-4xl text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold mb-3">AWS EC2</h3>
          <p className="text-lg">Deploying and managing scalable cloud infrastructure.</p>
        </div>

        {/* Skill 5 - GitHub Commands */}
        <div className="p-6 bg-gray-700 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-center mb-3">
            <FaGitAlt className="text-4xl text-red-500" />
          </div>
          <h3 className="text-xl font-semibold mb-3">GitHub Commands</h3>
          <p className="text-lg">Version control using Git and managing repositories on GitHub.</p>
        </div>

        {/* Skill 6 - Frontend Basics */}
        <div className="p-6 bg-gray-700 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-center mb-3">
            <FaCode className="text-4xl text-teal-500" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Frontend Basics</h3>
          <p className="text-lg">HTML, CSS, JavaScript for creating basic interactive UIs.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;