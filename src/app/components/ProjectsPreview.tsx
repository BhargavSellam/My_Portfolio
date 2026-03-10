import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';

const featuredProjects = [
  {
    title: "Lumos LLM: A High-Inference, Multi-Theme AI Chatbot",
    description: "High-speed Groq-powered LLM chatbot with an adaptive multi-theme interface.",
    tags: ["Python", "Flask", "Groq API", "JavaScript"],
    image: "https://www.nextiva.com/cdn-cgi/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/blog/wp-content/uploads/sites/10/2024/11/Chatbot-Call-Center.webp?resize=1024,576",
    link: "https://github.com/BhargavSellam/LLM_Based_ChatBot"
  },
  {
    title: "EduFlow: A TypeScript-Powered Learning Management Interface",
    description: "Clean, responsive React and TypeScript landing page for educational organizations.",
    tags: ["TypeScript", "JavaScript", "HTML", "CSS"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6sa7aPlmgkAupUVSW1QxbnPsbGHTuhkAkg&s",
    link: "https://github.com/BhargavSellam/ReactCerametiPage"
  },
  {
    title: "A Command-Driven Django Voice Control System",
    description: "Interactive voice command interface built with a robust Django backend.",
    tags: ["Python", "Django", "JavaScript"],
    image: "https://cdn.vectorstock.com/i/500p/25/60/voice-assistant-soundwave-concept-vector-39352560.jpg",
    link: "https://github.com/BhargavSellam/Voice-Assistant-Django"
  }
];

export function ProjectsPreview() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Showcasing innovation through code and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-sky-600 dark:bg-sky-500 rounded-lg hover:bg-sky-700 dark:hover:bg-sky-600 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg mt-auto"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-sky-600 dark:bg-sky-500 rounded-lg hover:bg-sky-700 dark:hover:bg-sky-600 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}