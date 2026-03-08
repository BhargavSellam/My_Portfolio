import { Moon, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-20 items-center rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
      aria-label="Toggle theme"
    >
      {/* Animated slider background */}
      <motion.div
        className="absolute h-8 w-8 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 dark:from-emerald-500 dark:to-emerald-600 shadow-md"
        initial={false}
        animate={{
          x: isDark ? 40 : 4,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />
      
      {/* Sun icon (left side) */}
      <motion.div
        className="absolute left-2 z-10 flex h-6 w-6 items-center justify-center"
        initial={false}
        animate={{
          scale: isDark ? 0.8 : 1,
          opacity: isDark ? 0.5 : 1,
          rotate: isDark ? 180 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <Sun 
          className="h-5 w-5 text-yellow-500 dark:text-slate-400" 
          strokeWidth={2.5}
        />
      </motion.div>

      {/* Moon icon (right side) */}
      <motion.div
        className="absolute right-2 z-10 flex h-6 w-6 items-center justify-center"
        initial={false}
        animate={{
          scale: isDark ? 1 : 0.8,
          opacity: isDark ? 1 : 0.5,
          rotate: isDark ? 0 : -180,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <Moon 
          className="h-5 w-5 text-slate-400 dark:text-sky-300" 
          strokeWidth={2.5}
        />
      </motion.div>

      {/* Pulse effect on toggle */}
      <motion.div
        className="absolute inset-0 rounded-full bg-sky-400/20 dark:bg-emerald-400/20"
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 0, opacity: 1 }}
        key={theme}
        transition={{
          duration: 0,
        }}
        whileTap={{
          scale: [0, 1.2],
          opacity: [1, 0],
          transition: { duration: 0.5 },
        }}
      />
    </button>
  );
}
