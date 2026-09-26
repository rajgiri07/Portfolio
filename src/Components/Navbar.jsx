import React, { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="relative flex items-center justify-between bg-slate-800 px-6 py-5 text-white md:px-8">

      {/* Logo */}
      <h1 className="font-serif text-xl font-bold md:text-2xl">
        <span className="text-amber-100">Raj</span> Kumar Giri
      </h1>

      {/* Desktop Menu */}
      <div className="hidden gap-8 font-serif text-lg md:flex">
        <a href="#home" className="hover:text-cyan-300">
          Home
        </a>

        <a href="#about" className="hover:text-cyan-300">
          About
        </a>

        <a href="#skills" className="hover:text-cyan-300">
          Skills
        </a>

        <a href="#projects" className="hover:text-cyan-300">
          Projects
        </a>

        <a href="#education" className="hover:text-cyan-300">
          Education
        </a>

        <a href="#certification" className="hover:text-cyan-300">
          Certification
        </a>
      </div>

      {/* Mobile Button */}
      <button
        onClick={() => setMenu(!menu)}
        className="text-3xl md:hidden"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menu && (
        <div className="absolute right-5 top-20 z-50 flex flex-col gap-5 rounded-xl border border-slate-700 bg-slate-700 px-8 py-6 md:hidden">

          <a
            href="#home"
            onClick={() => setMenu(false)}
            className="italic hover:text-cyan-300"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setMenu(false)}
            className="italic hover:text-cyan-300"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={() => setMenu(false)}
            className="italic hover:text-cyan-300"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setMenu(false)}
            className="italic hover:text-cyan-300"
          >
            Projects
          </a>

          <a
            href="#education"
            onClick={() => setMenu(false)}
            className="italic hover:text-cyan-300"
          >
            Education
          </a>

          <a
            href="#certification"
            onClick={() => setMenu(false)}
            className="italic hover:text-cyan-300"
          >
            Certification
          </a>

        </div>
      )}
    </nav>
  );
};

export default Navbar;