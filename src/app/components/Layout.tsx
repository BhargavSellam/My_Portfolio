import { Outlet } from 'react-router';
import { AnimatedBackground } from './AnimatedBackground';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="min-h-screen font-sans antialiased text-slate-900 dark:text-slate-100 selection:bg-sky-500/30">
      <AnimatedBackground />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
