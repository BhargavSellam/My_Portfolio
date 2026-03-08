import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';
import { ProjectsPreview } from '../components/ProjectsPreview';

export function Home() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Handle hash navigation on page load
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <main className="flex flex-col">
      <Hero />
      <ProjectsPreview />
      <Skills />
      <Contact />
    </main>
  );
}