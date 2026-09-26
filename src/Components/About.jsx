import React from "react";
import "remixicon/fonts/remixicon.css";

const About = () => {
  return (
    <section className="bg-slate-900 px-8 py-2 text-white border-t border-amber-100">
      <div className="grid grid-cols-1 md:grid-cols-3">

        {/* About Me */}
        <div
          id="about"
          className="border-b border-slate-700 p-6 md:border-b-0 md:border-r"
        >
          <p className="text-sm font-semibold text-cyan-400">
            GET TO KNOW ME
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            About Me
          </h2>

          <div className="mt-4 h-1 w-10 bg-cyan-400"></div>

          <p className="mt-6 leading-7 text-slate-400">
            Hello! I'm Raj Kumar Giri, a Computer Science Engineering
            student and MERN Stack Developer. I enjoy building modern,
            responsive and user-friendly web applications.
          </p>

          <p className="mt-4 leading-7 text-slate-400">
            I am passionate about learning new technologies, solving
            real-world problems and turning ideas into practical
            applications.
          </p>

          <div className="mt-6 space-y-4">

            <div className="flex items-center gap-3">
              <i className="ri-graduation-cap-line text-2xl text-cyan-400"></i>

              <div>
                <p className="font-semibold">Education</p>
                <p className="text-sm text-slate-400">
                  B.Tech CSE (2023 - 2027)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <i className="ri-map-pin-line text-2xl text-cyan-400"></i>

              <div>
                <p className="font-semibold">Location</p>
                <p className="text-sm text-slate-400">
                  Bhopal, Madhya Pradesh
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <i className="ri-code-s-slash-line text-2xl text-cyan-400"></i>

              <div>
                <p className="font-semibold">Interests</p>
                <p className="text-sm text-slate-400">
                  Coding, Learning, Technology
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* My Skills */}
        <div
          id="skills"
          className="border-b border-slate-700 p-6 md:border-b-0 md:border-r"
        >
          <h2 className="text-3xl font-bold">
            My Skills
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-3">

            <div className="flex items-center gap-3 rounded-lg border border-slate-800 p-3">
              <i className="ri-java-fill text-2xl text-orange-500"></i>
              Java
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-slate-800 p-3">
              <i className="ri-javascript-line text-2xl text-yellow-400"></i>
              JavaScript
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-slate-800 p-3">
              <i className="ri-reactjs-line text-2xl text-cyan-400"></i>
              React
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-slate-800 p-3">
              <i className="ri-nodejs-line text-2xl text-green-500"></i>
              Node.js
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-slate-800 p-3">
              <i className="ri-code-s-slash-line text-2xl"></i>
              Express
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-slate-800 p-3">
              <i className="ri-database-2-line text-2xl text-green-500"></i>
              MongoDB
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-slate-800 p-3">
              <i className="ri-database-line text-2xl text-blue-400"></i>
              SQL
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-slate-800 p-3">
              <i className="ri-html5-line text-2xl text-orange-500"></i>
              HTML & CSS
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-slate-800 p-3">
              <i className="ri-git-branch-line text-2xl text-orange-500"></i>
              Git
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-slate-800 p-3">
              <i className="ri-github-fill text-2xl"></i>
              GitHub
            </div>

          </div>
        </div>

        {/* My Projects */}
        <div
          id="projects"
          className="p-6"
        >
          <h2 className="text-3xl font-bold">
            My Projects
          </h2>

          <div className="mt-4 h-1 w-10 bg-cyan-400"></div>

          <div className="mt-8 grid grid-cols-1 gap-4">

            {/* Project 1 */}
            <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
              <img
                src="/peer.png"
                alt="Peer-to-Peer Learning Platform"
                className="h-48 w-full rounded-lg object-cover object-top"
              />

              <h3 className="mt-5 text-xl font-bold">
                Peer-to-Peer Learning Platform
              </h3>

              <p className="mt-3 text-slate-400">
                A full-stack platform for students to connect,
                share and access study resources.
              </p>
            </div>

            {/* Project 2 */}
            <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
              <img
                src="/cupon.png"
                alt="Digital Coupon Exchange & Marketplace"
                className="h-48 w-full rounded-lg object-cover"
              />

              <h3 className="mt-5 text-xl font-bold">
                Digital Coupon Exchange & Marketplace
              </h3>

              <p className="mt-3 text-slate-400">
                A platform for buying, selling, exchanging and
                donating digital coupons.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;