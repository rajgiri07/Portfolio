import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex max-h-screen flex-col items-center justify-center gap-10 bg-slate-900 px-16 py-12 text-white md:flex-row md:justify-between  md:px-12"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2">

        <p className="inline-block rounded-full border border-amber-300 px-5 py-3 text-base italic md:text-lg">
          👋 Welcome to my Portfolio
        </p>

        <h1 className="mt-5 font-serif text-4xl font-bold md:text-5xl">
          Hello, I'm
          <br />
          Raj Kumar <span className="text-cyan-300">Giri</span>
        </h1>

        <h3 className="mt-5 text-xl font-semibold italic md:text-2xl">
          Software Engineer
          <span className="mx-3 text-cyan-100 md:mx-5">|</span>
          MERN Stack Developer
        </h3>

        <p className="mt-4 max-w-xl text-lg leading-8 text-slate-200 md:text-xl">
          I build modern, responsive and user-friendly web applications
          using React, Node.js and MongoDB. I am passionate about
          solving real-world problems and learning new technologies.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg border border-cyan-400 bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            View My Work →
          </a>

          <a
            href="/resume.pdf"
            download
            className="rounded-lg border border-slate-600 bg-black px-6 py-3 font-semibold transition hover:border-cyan-400"
          >
            Download Resume ↓
          </a>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex gap-6">
          <a
            href="https://github.com/rajgiri07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            <i className="ri-github-fill text-4xl"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/raj-kumar-giri-b11574333/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            <i className="ri-linkedin-fill text-4xl text-[#0A66C2]"></i>
          </a>

          <a
            href="mailto:rajg77355@gmail.com"
            className="hover:text-cyan-400"
          >
            <i className="ri-mail-ai-line text-4xl text-red-500"></i>
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex w-full justify-center md:w-1/2">
        <img
          src="/raj2.png"
          alt="Raj Kumar Giri"
          className="h-64 w-64 rounded-full border-2 border-amber-100 object-cover sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96"
        />
      </div>
    </section>
  );
};

export default Hero;