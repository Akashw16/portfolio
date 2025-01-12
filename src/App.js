import React from "react";
import './App.css';
import 'animate.css';


function App() {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">

      {/* Header */}
      <header className="bg-gray-800 text-white text-center py-8 animate__animated animate__fadeIn">
        <h1 className="text-4xl font-bold">Akash Wani</h1>
        <p className="mt-4 text-lg">Detail-oriented software developer specializing in Java, Spring Boot, and REST API development.</p>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-700 text-white py-4 animate__animated animate__fadeIn">
        <ul className="flex justify-center space-x-8">
          <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
          <li><a href="#projects" className="hover:text-yellow-400 transition">Projects</a></li>
          <li><a href="#skills" className="hover:text-yellow-400 transition">Skills</a></li>
          <li><a href="#education" className="hover:text-yellow-400 transition">Education</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
        </ul>
      </nav>

      {/* About Section */}
      <section id="about" className="py-16 px-6 text-center animate__animated animate__fadeIn">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg mb-4">Hi, I'm Akash Wani, a passionate software developer with expertise in Java, Spring Boot, and full-stack application development. I enjoy building scalable and efficient software solutions.</p>
        <img src="/portfolio/images/profile.jpg" alt="Akash Wani" className="rounded-full w-40 mx-auto mb-6" />
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-200 py-16 text-center animate__animated animate__fadeIn">
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

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 text-center animate__animated animate__fadeIn">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <ul className="space-y-4 text-lg">
          <li><strong>Programming Languages:</strong> Java, Python</li>
          <li><strong>Frameworks:</strong> J2EE, Spring, Spring Boot, Hibernate</li>
          <li><strong>Web Development:</strong> HTML, JavaScript, React, Tailwind CSS</li>
          <li><strong>Database Management:</strong> MySQL, MongoDB</li>
          <li><strong>Tools:</strong> Maven, REST API</li>
          <li><strong>Soft Skills:</strong> Quick Learner, Adaptability</li>
        </ul>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-gray-200 py-16 text-center animate__animated animate__fadeIn">
        <h2 className="text-3xl font-semibold mb-6">Education</h2>
        <ul className="space-y-4 text-lg">
          <li>PG Diploma in C-DAC Computer Programming – 6 GPA (2024)</li>
          <li>B.E. in Computer Science – 7.89 CGPA (2023)</li>
          <li>HSC – 69.69% (2019)</li>
          <li>SSC – 82.40% (2017)</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 text-center animate__animated animate__fadeIn">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-lg mb-4"><i className="fas fa-envelope"></i> <a href="mailto:akashwani.sit.comp@gmail.com" className="text-blue-500">akashwani.sit.comp@gmail.com</a></p>
        <p className="text-lg mb-4"><i className="fas fa-phone"></i> 9822436704</p>
        <p className="text-lg"><i className="fab fa-linkedin"></i> <a href="https://linkedin.com/in/akashw16" className="text-blue-500" target="_blank" rel="noopener noreferrer">linkedin.com/in/akashw16</a></p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2025 Akash Wani. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
