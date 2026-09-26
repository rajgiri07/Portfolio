import React from "react";
import "remixicon/fonts/remixicon.css";

const Education = () => {
  return (
    <section className="bg-slate-900 px-8 py-9 text-white border-t border-amber-100">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        {/* Education */}
        <div
          id="education"
          className="border-b border-slate-700 p-6 md:border-b-0 md:border-r"
        >
          <h2 className="text-2xl font-bold italic">
            Education
          </h2>

          <div className="mt-4 h-1 w-10 bg-cyan-400"></div>

          {/* B.Tech */}
          <div className="mt-6">
            <h3 className="text-lg font-bold">
              <i className="ri-asterisk mr-2"></i>
              B.Tech - Computer Science & Engineering
            </h3>

            <p className="mt-2 text-cyan-400">
              Oriental Institute of Science and Technology, Bhopal
            </p>

            <p className="mt-2 text-slate-400">
              2023 - 2027 | CGPA: 7.81
            </p>
          </div>

          <div className="my-5 border-t border-slate-700"></div>

          {/* Diploma */}
          <div>
            <h3 className="text-lg font-bold">
              <i className="ri-asterisk mr-2"></i>
              Diploma - Mechanical Engineering
            </h3>

            <p className="mt-2 text-cyan-400">
              Government Polytechnic Darbhanga, Bihar
            </p>

            <p className="mt-2 text-slate-400">
              2020 - 2023 | CGPA: 8.49
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div
          id="certification"
          className="border-b border-slate-700 p-6 md:border-b-0 md:border-r"
        >
          <h2 className="text-2xl font-bold italic">
            Certification
          </h2>

          <div className="mt-4 h-1 w-10 bg-cyan-400"></div>

          {/* Certificate 1 */}
          <div className="mt-6 rounded-lg border border-white bg-slate-900 px-5">
            <h3 className="mt-4 font-serif text-xl font-bold">
              <i className="ri-java-fill mr-2 text-2xl text-red-400"></i>
              Programming in Java
            </h3>

            <p className="mt-2 pb-4 font-serif text-slate-400">
              NPTEL
            </p>
          </div>

          {/* Certificate 2 */}
          <div className="mt-4 rounded-lg border border-white bg-slate-900 px-5">
            <h3 className="mt-4 font-serif text-xl font-bold">
              <i className="ri-database-2-fill mr-2 text-2xl text-blue-400"></i>
              Database Management System
            </h3>

            <p className="mt-2 pb-4 font-serif text-slate-400">
              NPTEL
            </p>
          </div>
        </div>

        {/* Career Goals */}
        <div className="p-6">
          <h2 className="text-2xl font-bold italic">
            Career Goals
          </h2>

          <div className="mt-4 h-1 w-10 bg-cyan-400"></div>

          <p className="mt-6 text-slate-400">
            My goal is to become a skilled Software Engineer
            and build real-world applications.
          </p>

          <div className="mt-8 flex items-center justify-center gap-6 border-t border-slate-700 pt-5 text-slate-400">

            <div className="flex flex-col items-center">
              <i className="ri-code-s-slash-line text-2xl text-cyan-400"></i>
              <span className="mt-1 text-sm">CODE</span>
            </div>

            <div className="h-10 border-l border-slate-700"></div>

            <div className="flex flex-col items-center">
              <i className="ri-book-open-line text-2xl text-cyan-400"></i>
              <span className="mt-1 text-sm">LEARN</span>
            </div>

            <div className="h-10 border-l border-slate-700"></div>

            <div className="flex flex-col items-center">
              <i className="ri-lightbulb-line text-2xl text-cyan-400"></i>
              <span className="mt-1 text-sm">SOLVE</span>
            </div>

            <div className="h-10 border-l border-slate-700"></div>

            <div className="flex flex-col items-center">
              <i className="ri-rocket-line text-2xl text-cyan-400"></i>
              <span className="mt-1 text-sm">GROW</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;