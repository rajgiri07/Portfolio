import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="border-t border-slate-950 bg-slate-800 px-8 py-10 text-white"
    >
      <div className="grid grid-cols-1 place-items-center">

        <div className="p-6 text-center">

          <p className="text-sm font-semibold text-cyan-400">
            GET IN TOUCH
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Contact Me
          </h2>

          <div className="mx-auto mt-4 h-1 w-10 bg-cyan-400"></div>

          <p className="mt-5 text-slate-400">
            Let's connect and build something amazing together!
          </p>

          <div className="mt-6 space-y-4">

            <a
              href="mailto:rajg77355@gmail.com"
              className="flex items-center justify-center gap-4 text-slate-300 hover:text-cyan-400"
            >
              <i className="ri-mail-line text-2xl text-cyan-400"></i>
              rajg77355@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/raj-kumar-giri-b11574333/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 text-slate-300 hover:text-cyan-400"
            >
              <i className="ri-linkedin-box-fill text-2xl text-cyan-400"></i>
              linkedin.com/in/raj-kumar-giri-b11574333
            </a>

            <a
              href="https://github.com/rajgiri07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-4 text-slate-300 hover:text-cyan-400"
            >
              <i className="ri-github-fill text-2xl text-cyan-400"></i>
              github.com/rajgiri07
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;