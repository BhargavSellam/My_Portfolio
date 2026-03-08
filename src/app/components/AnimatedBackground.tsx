import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Floating animation variants
  const floatAnimation = (delay: number, duration: number) => ({
    y: [0, -40, 0],
    x: [0, 20, 0],
    opacity: [0.05, 0.1, 0.05],
    scale: [1, 1.1, 1],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  });

  const driftAnimation = (delay: number, duration: number) => ({
    x: [0, 100, 0],
    y: [0, 50, 0],
    opacity: [0.05, 0.08, 0.05],
    rotate: [0, 180, 360],
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "linear",
      delay: delay,
    },
  });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* Base gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-100/50 dark:to-slate-900/50 pointer-events-none" />

      {/* Navy Blue Circle - Large, Top Left */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#0F172A] blur-3xl"
        animate={floatAnimation(0, 25)}
        style={{ opacity: 0.05 }}
      />

      {/* Sky Blue Circle - Medium, Center Right */}
      <motion.div
        className="absolute top-[20%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-[#38BDF8] blur-3xl"
        animate={floatAnimation(2, 20)}
        style={{ opacity: 0.08 }}
      />

      {/* Emerald Green Accent - Small, Bottom Left */}
      <motion.div
        className="absolute bottom-[-10%] left-[10%] w-[25vw] h-[25vw] rounded-full bg-[#10B981] blur-3xl"
        animate={floatAnimation(4, 30)}
        style={{ opacity: 0.06 }}
      />

      {/* Additional Abstract Shapes for Detail */}
      
      {/* Thin Line / Pill Shape */}
      <motion.div
        className="absolute top-[15%] left-[20%] w-[200px] h-[4px] bg-slate-400/20 rounded-full rotate-45"
        animate={{
          opacity: [0, 0.2, 0],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Dot Grid Effect (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }} 
      />
      
      {/* Drifting shapes for depth */}
      <motion.div
        className="absolute top-[60%] right-[30%] w-24 h-24 border border-slate-400/10 rounded-xl"
        animate={driftAnimation(0, 40)}
      />
      
       <motion.div
        className="absolute top-[30%] left-[40%] w-16 h-16 border border-[#38BDF8]/10 rounded-full"
        animate={driftAnimation(5, 35)}
      />

    </div>
  );
}
