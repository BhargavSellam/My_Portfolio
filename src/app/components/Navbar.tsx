import { motion } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail, Download, Eye, XIcon } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Link, useLocation, useNavigate } from 'react-router';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { name: 'About', href: '/', hash: 'about' },
    { name: 'Projects', href: '/projects', hash: null },
    { name: 'Skills', href: '/', hash: 'skills' },
    { name: 'Contact', href: '/', hash: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string, hash: string | null) => {
    e.preventDefault();
    
    if (!hash) {
      // No hash, just navigate normally (for /projects)
      navigate(href);
    } else {
      // Has hash, need to handle scrolling
      if (location.pathname !== '/') {
        // Navigate to home first, then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home, just scroll
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Bhargav_Seelam_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenPreview = () => {
    setShowResumeModal(true);
  };

  const handleCloseModal = () => {
    setShowResumeModal(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Link to="/" className="font-bold text-xl tracking-tight text-slate-900 dark:text-slate-100">
                Bhargav Sellam<span className="text-sky-500">.portfolio</span>
              </Link>
            </motion.div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.hash)}
                    className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <motion.button
                onClick={handleOpenPreview}
                data-resume-trigger
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center space-x-2 group relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <Eye className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Resume</span>
              </motion.button>
              
              <ThemeToggle />
              {/*
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Github size={20} />
              </a>
              */}
              {/*<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              */}
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-900 dark:hover:text-white focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="flex justify-center py-2">
                <ThemeToggle />
              </div>
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    handleNavClick(e, link.href, link.hash);
                    setIsOpen(false);
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.button
                onClick={() => {
                  handleOpenPreview();
                  setIsOpen(false);
                }}
                className="w-full mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Resume Preview Modal */}
      {showResumeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-5xl h-[90vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-sky-100 to-indigo-100 dark:from-sky-900/30 dark:to-indigo-900/30 rounded-lg">
                  <Eye className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Resume Preview
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Bhargav Seelam
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <motion.button
                  onClick={handleDownloadResume}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </motion.button>
                
                <motion.button
                  onClick={handleCloseModal}
                  className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <XIcon className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* PDF Preview */}
            <div className="w-full h-[calc(100%-73px)] bg-slate-100 dark:bg-slate-950">
              <iframe
                src="/resume.pdf"
                className="w-full h-full"
                title="Resume Preview"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}