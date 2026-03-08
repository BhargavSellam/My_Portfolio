import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  // Use HTMLFormElement type for TypeScript support
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Safety check for TypeScript
    if (!formRef.current) return;

    setStatus('sending');

    // Pulling values from .env file
    // console.log("EmailJS Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    // const SERVICE_ID = "service_7nns8vf";
    // const TEMPLATE_ID = "template_ap36uqa";
    // const PUBLIC_KEY = "nCZx-hDxsVdsBTi7J";

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          console.log('Success:', result.text);
          setStatus('success');
          formRef.current?.reset();
          // Reset success message after 5 seconds
          setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
          console.error('EmailJS Error:', error.text);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
      });
  }; // This closes handleSubmit correctly

  // The return statement is now INSIDE the Contact function
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Let's Collaborate
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Contact Information
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-300">
                <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-600 dark:text-sky-400">
                  <Mail className="w-5 h-5" />
                </div>
                <span>seelambhargav2001@gmail.com</span>
              </div>
            </div>
          </div>

          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Name
              </label>
              <input
                required
                type="text"
                id="user_name"
                name="user_name"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Email
              </label>
              <input
                required
                type="email"
                id="user_email"
                name="user_email"
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your email id"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Message
              </label>
              <textarea
                required
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-3 px-6 rounded-lg font-semibold shadow-lg transform transition-all duration-200 flex items-center justify-center space-x-2 
                ${status === 'success' ? 'bg-emerald-500 text-white' : 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white'} 
                ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-0.5'}`}
            >
              {status === 'idle' && (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
              {status === 'sending' && (
                <>
                  <span>Sending...</span>
                  <Loader2 className="w-4 h-4 animate-spin" />
                </>
              )}
              {status === 'success' && (
                <>
                  <span>Message Sent!</span>
                  <CheckCircle className="w-4 h-4" />
                </>
              )}
              {status === 'error' && <span>Error! Try again.</span>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


// import { motion } from 'motion/react';
// import { Mail, MessageSquare, Send } from 'lucide-react';

// export function Contact() {
//   return (
//     <section id="contact" className="py-24 relative overflow-hidden">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
//             Let's Collaborate
//           </h2>
//           <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
//             Have a project in mind or just want to say hi? I'd love to hear from you.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
          
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
//                 Contact Information
//               </h3>
//               <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
//                 Feel free to reach out via email or connect with me on social media. 
//                 I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
//               </p>
//             </div>

//             <div className="space-y-4">
//               <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-300">
//                 <div className="w-10 h-10 rounded-full bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-600 dark:text-sky-400">
//                   <Mail className="w-5 h-5" />
//                 </div>
//                 <span>seelambhargav2001@gmail.com</span>
//               </div>
//               <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-300">
//                 <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
//                   <MessageSquare className="w-5 h-5" />
//                 </div>
//                 <span>Available for freelance</span>
//               </div>
//             </div>
//           </div>

//           <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
//                 placeholder="Enter your name"
//               />
//             </div>
            
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
//                 placeholder="Enter your email id"
//               />
//             </div>

//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 rows={4}
//                 className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all resize-none"
//                 placeholder="Tell me about your project..."
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
//             >
//               <span>Send Message</span>
//               <Send className="w-4 h-4" />
//             </button>
//           </form>

//         </div>
//       </div>
//     </section>
//   );
// }
