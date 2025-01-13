import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Header />
      <About />
      <Skills />
      <Projects />
      
      <Education />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
