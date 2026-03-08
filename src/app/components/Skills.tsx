import { motion } from 'motion/react';
import { AppWindow, Database, Layout, Server, Settings, Terminal } from 'lucide-react';

const skillsData = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6 text-sky-500" />,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6 text-emerald-500" />,
    items: ["Django", "SQL", "Supabase", "GraphQL"],
  },
  {
    category: "DevOps",
    icon: <Terminal className="w-6 h-6 text-indigo-500" />,
    items: ["Jenkins","Terraform", "Git", "Linux"],
  },
  {
    category: "Cloud Architecture",
    icon: <AppWindow className="w-6 h-6 text-pink-500" />,
    items: ["AWS"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Technical Expertise
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolset for building scalable, high-performance applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl border border-slate-100 dark:border-slate-700 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center text-slate-600 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent opacity-50" />
    </section>
  );
}
