import { useEffect } from 'react';
import { Projects } from '../components/Projects';

export function ProjectsPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex flex-col pt-20">
      <Projects />
    </main>
  );
}