import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 bg-gradient-to-r from-blue-500 to-teal-400 text-white"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold mb-4 animate__animated animate__fadeIn">
          Education
        </h2>
        <p className="text-lg animate__animated animate__fadeIn animate__delay-1s">
          My educational background has shaped my skills and passion for technology.
        </p>
      </div>

      {/* Education Blocks Container */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* PG Diploma in C-DAC */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-teal-300 to-blue-500 animate__animated animate__fadeIn">
          <div className="mb-4 text-5xl text-teal-600">🎓</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Institute for Advanced Computing and Software Development, Pune
          </h3>
          <p className="text-sm text-gray-700">PG Diploma in C-DAC Computer Programming</p>
          <p className="text-xs text-gray-500">2024 - GPA: 6.0</p>
        </div>

        {/* B.E. in Computer Science */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-teal-300 to-blue-500 animate__animated animate__fadeIn animate__delay-1s">
          <div className="mb-4 text-5xl text-teal-600">🎓</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Sinhgad Institute of Technology, Lonavala
          </h3>
          <p className="text-sm text-gray-700">B.E. in Computer Science</p>
          <p className="text-xs text-gray-500">2023 - CGPA: 7.89</p>
        </div>

        {/* HSC */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-teal-300 to-blue-500 animate__animated animate__fadeIn animate__delay-2s">
          <div className="mb-4 text-5xl text-teal-600">🎓</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            B.G.P. Sahyadri Jr. College, Sangamner
          </h3>
          <p className="text-sm text-gray-700">HSC</p>
          <p className="text-xs text-gray-500">2019 - Percentage: 69.69%</p>
        </div>

        {/* SSC */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-teal-300 to-blue-500 animate__animated animate__fadeIn animate__delay-3s">
          <div className="mb-4 text-5xl text-teal-600">🎓</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Digamber Ganesh Saraf Vidyalaya, Sangamner
          </h3>
          <p className="text-sm text-gray-700">SSC</p>
          <p className="text-xs text-gray-500">2017 - Percentage: 82.40%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
