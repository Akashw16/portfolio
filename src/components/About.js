import React from "react";
import profileImg from "../assets/profile.jpg"; // Import the profile image

const About = () => {
  return (
    <section id="about" className="p-8 text-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        Hi, I'm Akash Wani, a passionate software developer with expertise in
        Java, Spring Boot, and full-stack application development.
      </p>
      
      {/* Profile Image */}
      <img
        src={profileImg}
        alt="Akash Wani"
        className="rounded-full w-32 mx-auto mt-4"
      />

      {/* Resume Download Link */}
      <div className="mt-6">
        <a
          href="/Akash_Wani_Resume.pdf"  // Path to your resume in the public folder
          download
          className="inline-flex items-center px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-600 transform transition duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-2s"
        >
          <span className="mr-2">📄</span> Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;
