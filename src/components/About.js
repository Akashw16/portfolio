import React from "react";
import profileImg from "../assets/profile.jpg"; // Ensure the path is correct

const About = () => {
  return (
    <section
      id="about"
      className="h-screen bg-gradient-to-r from-blue-500 to-teal-400 text-white flex justify-center items-center relative"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-center px-6 md:px-12 space-y-8">
        {/* Header with animated text */}
        <h1 className="text-4xl md:text-5xl font-extrabold animate__animated animate__fadeIn animate__delay-1s">
          Hi, I'm Akash Wani
        </h1>
        <p className="text-lg md:text-xl leading-relaxed animate__animated animate__fadeIn animate__delay-2s">
          I'm a passionate backend developer specializing in Java, Spring Boot, and scalable application development.
        </p>

        {/* Interactive Profile Image with Hover Effect */}
        <div className="mx-auto w-36 h-36 md:w-48 md:h-48 mb-6 relative transform transition duration-300 hover:scale-110 hover:rotate-6 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-3s">
          {/* Outer Border and Glow Effect on Hover */}
          <div className="absolute inset-0 border-4 border-transparent rounded-full transition duration-300 ease-in-out hover:border-blue-500 hover:scale-125 hover:shadow-xl"></div>

          {/* Profile Image */}
          <img
            src={profileImg}
            alt="Akash Wani"
            className="rounded-full w-full h-full object-cover shadow-lg transition duration-500 ease-in-out transform hover:scale-110 hover:rotate-6"
          />
        </div>

        {/* Call-to-Action Button to View Skills */}
        <a
          href="#skills"
          className="inline-block px-8 py-3 mt-6 bg-white text-gray-900 font-semibold text-lg rounded-full hover:bg-gray-100 transform transition duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-4s"
        >
          View My Skills
        </a>
      </div>

      {/* Social Links on the Right */}
      <div className="absolute right-10 bottom-10 flex flex-col gap-6">
        {/* GitHub Button */}
        <a
          href="https://github.com/akashw16"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-gray-900 text-white font-semibold text-lg rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-xl"
        >
          <i className="fab fa-github"></i>
        </a>

        {/* LinkedIn Button */}
        <a
          href="https://linkedin.com/in/akashw16"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-xl"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default About;
