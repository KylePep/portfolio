"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      <nav
        className={`fixed bottom-16 z-50 flex place-content-center w-screen
                    transition-opacity duration-500`}
      >
        <div className="mx-4 w-100 flex justify-around glass text-xs rounded-full">
          <a href="#about-section" className="btn nav-button">About</a>
          <a href="#skills-section" className="btn nav-button">Skills</a>
          <a href="#projects-section" className="btn nav-button">Projects</a>
          <a href="#contact-section" className="btn nav-button">Contact</a>
        </div>
      </nav>
    </>
  );
}
