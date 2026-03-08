import { motion } from "motion/react";
import {
  ArrowDown,
  Code2,
  Database,
  Layout,
} from "lucide-react";

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-16 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-2 rounded-full bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 backdrop-blur-sm text-sm text-slate-600 dark:text-slate-300">
            <span className="w-2 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for new projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Building digital <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">
              experiences
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            <b>
              I am Bhargav S, an interdisciplinary engineer
              combining AI intelligence, DevOps automation, and
              seamless user experiences.
            </b>
          </p>
        </motion.div>

        {/* Floating Abstract Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute -z-10 w-full h-full inset-0 pointer-events-none"
        >
          <Code2 className="absolute top-1/4 left-[10%] w-12 h-12 text-sky-500/20" />
          <Database className="absolute bottom-1/3 right-[15%] w-10 h-10 text-emerald-500/20" />
          <Layout className="absolute top-1/3 right-[20%] w-8 h-8 text-indigo-500/20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="w-6 h-6 text-slate-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}