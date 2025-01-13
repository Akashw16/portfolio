
import React from "react";

const Education = () => {
  return (
    <section id="education" className="p-8 text-center bg-gray-100">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      {/* Education Blocks Container */}
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 place-items-center gap-4">
          {/* PG Diploma in C-DAC */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-60 h-64 transform transition duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn">
            <div className="mb-2 text-4xl">🎓</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Institute for Advanced Computing and Software Development, Pune
            </h3>
            <p className="text-sm text-gray-700">PG Diploma in C-DAC Computer Programming</p>
            <p className="text-xs text-gray-500">2024 - GPA: 6.0</p>
          </div>
          {/* B.E. in Computer Science */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-60 h-64 transform transition duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-1s">
            <div className="mb-2 text-4xl">🎓</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Sinhgad Institute of Technology, Lonavala
            </h3>
            <p className="text-sm text-gray-700">B.E. in Computer Science</p>
            <p className="text-xs text-gray-500">2023 - CGPA: 7.89</p>
          </div>
          {/* HSC */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-60 h-64 transform transition duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-2s">
            <div className="mb-2 text-4xl">🎓</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              B.G.P. Sahyadri Jr. College, Sangamner
            </h3>
            <p className="text-sm text-gray-700">HSC</p>
            <p className="text-xs text-gray-500">2019 - Percentage: 69.69%</p>
          </div>
          {/* SSC */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-60 h-64 transform transition duration-300 hover:scale-105 hover:shadow-xl animate__animated animate__fadeIn animate__delay-3s">
            <div className="mb-2 text-4xl">🎓</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Digamber Ganesh Saraf Vidyalaya, Sangamner
            </h3>
            <p className="text-sm text-gray-700">SSC</p>
            <p className="text-xs text-gray-500">2017 - Percentage: 82.40%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
