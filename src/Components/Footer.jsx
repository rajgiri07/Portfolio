import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-600 bg-clack px-8 py-6 text-white">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

        <p className="text-sm text-slate-400">
          © 2026 Raj Kumar Giri. All rights reserved.
        </p>

        <p className="text-sm text-slate-400">
          <span className="text-cyan-400">Keep Learning</span>
          <span className="mx-2">•</span>
          <span className="text-cyan-400">Keep Building</span>
          <span className="mx-2">•</span>
          <span className="text-cyan-400">Keep Growing</span>
        </p>

        <p className="text-sm text-slate-400">
          Made with <span className="text-red-500">♥</span> by Raj Kumar Giri
        </p>

      </div>
    </footer>
  );
};

export default Footer;