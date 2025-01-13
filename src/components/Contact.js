import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-gradient-to-r from-green-600 to-blue-500 text-white">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-yellow-200">Contact</h2>
      <div className="max-w-4xl mx-auto text-center text-lg">
        <p className="mb-4 text-yellow-200">
          <i className="fas fa-envelope"></i>{" "}
          <a
            href="mailto:akashwani.sit.comp@gmail.com"
            className="text-white hover:text-black"
          >
            akashwani.sit.comp@gmail.com
          </a>
        </p>
        <p className="mb-4 text-yellow-200">
          <i className="fas fa-phone"></i> 9822436704
        </p>
        <p className="mb-4 text-yellow-200">
          <i className="fab fa-linkedin"></i>{" "}
          <a
            href="https://linkedin.com/in/akashw16"
            className="text-white hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/akashw16
          </a>
        </p>
        <p>
          <a
            href="/Akash_Wani_Resume.pdf"
            target="_blank"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            View Resume
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
