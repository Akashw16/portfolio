import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 text-center animate__animated animate__fadeIn animate__delay-5s">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <p className="text-lg mb-4">
        <i className="fas fa-envelope"></i>{" "}
        <a href="mailto:akashwani.sit.comp@gmail.com" className="text-blue-500">
          akashwani.sit.comp@gmail.com
        </a>
      </p>
      <p className="text-lg mb-4">
        <i className="fas fa-phone"></i> 9822436704
      </p>
      <p className="text-lg">
        <i className="fab fa-linkedin"></i>{" "}
        <a
          href="https://linkedin.com/in/akashw16"
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/akashw16
        </a>
      </p>
    </section>
  );
};

export default Contact;
