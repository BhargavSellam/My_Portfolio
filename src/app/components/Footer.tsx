import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-center relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex items-center space-x-6 mb-4">
          <a
            href="https://github.com/BhargavSellam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-sky-500 transition-colors"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/bhargav-seelam-30b13b1b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-sky-500 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-sky-500 transition-colors"
          >
            <Twitter className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Bhargav Sellam
          Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}