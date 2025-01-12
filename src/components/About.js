// src/components/About.js
import React from "react";
import profileImg from "../assets/profile.jpg"; // Import the image

const About = () => {
  return (
    <section id="about" className="p-8 text-center bg-gray-100">
      <h2 className="text-2xl font-bold">About Me</h2>
      <p>
        Hi, I'm Akash Wani, a passionate software developer with expertise in
        Java, Spring Boot, and full-stack application development.
      </p>
      <img
        src={profileImg} // Use the imported image here
        alt="Akash Wani"
        className="rounded-full w-32 mx-auto mt-4"
      />
    </section>
  );
};

export default About;
