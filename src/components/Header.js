import React, { useEffect, useState } from "react";

const Header = () => {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        const scroll = window.scrollY + 200;
        if (scroll >= top && scroll < bottom) {
          setActive(section.id);
        }
      });

      // Check if user has scrolled for background effect
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-10 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div
          className={`text-lg font-bold transition-all duration-300 ${
            isScrolled ? "text-gray-800" : "text-white"
          }`}
        >
          Akash Wani
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-sm md:text-base">
          {[
            "home",
            "about",
            "skills",
            "projects",
            "education",
            "hobbies",
            "contact",
          ].map((id) => (
            <li
              key={id}
              className={`relative group ${
                active === id ? "font-bold" : ""
              }`}
            >
              <a
                href={`#${id}`}
                className={`transition-colors duration-300 ${
                  active === id
                    ? "text-blue-500"
                    : isScrolled
                    ? "text-gray-800 hover:text-blue-500"
                    : "text-white hover:text-blue-300"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
              {/* Animated Underline */}
              <span
                className={`absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${
                  active === id ? "w-full" : ""
                }`}
              ></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
