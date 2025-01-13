import React from "react";

const HobbiesAndExtraCurricular = () => {
  return (
    <section
      id="hobbies"
      className="py-16 bg-gradient-to-r from-orange-400 to-yellow-500 text-white"
    >
      {/* Extra-Curricular Activities Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold mb-4 animate__animated animate__fadeIn text-gray-900">
          Extra-Curricular Activities
        </h2>
        <p className="text-lg animate__animated animate__fadeIn animate__delay-1s text-gray-900">
          A glimpse of my leadership roles and contributions.
        </p>
      </div>

      {/* Extra-Curricular Activity: Photography & Social Media */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 justify-center">
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-teal-300 to-blue-500 animate__animated animate__fadeIn">
          <div className="mb-4 text-5xl text-teal-600 text-center">📸</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">
            Head of Photography & Social Media
          </h3>
          <p className="text-sm text-gray-700 text-center">
            Led the photography team and organized various technical and non-technical events as part of the IEEE Student Branch.
          </p>
        </div>
      </div>

      {/* Hobbies Section */}
      <div className="text-center mt-8 mb-8">
        <h2 className="text-4xl font-extrabold mb-4 animate__animated animate__fadeIn text-gray-900">
          My Hobbies
        </h2>
        <p className="text-lg animate__animated animate__fadeIn animate__delay-1s text-gray-900">
          Things I love doing in my free time.
        </p>
      </div>

      {/* Hobbies: Hiking & Trekking */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-teal-300 to-blue-500 animate__animated animate__fadeIn">
          <div className="mb-4 text-5xl text-teal-600">⛰️</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Hiking & Trekking
          </h3>
          <p className="text-sm text-gray-700">
            I love exploring nature with friends, hiking through challenging terrains, and making memories along the way.
          </p>
        </div>

        {/* Hobbies: Watching Movies */}
        <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r from-teal-300 to-blue-500 animate__animated animate__fadeIn animate__delay-1s">
          <div className="mb-4 text-5xl text-teal-600">🎬</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Watching Movies
          </h3>
          <p className="text-sm text-gray-700">
            Movies are my escape. Whether it's action, drama, or thriller, I
            enjoy every genre for its unique storytelling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HobbiesAndExtraCurricular;
