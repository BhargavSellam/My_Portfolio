import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-900 dark:text-white mb-4">404</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
          Page not found
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-sky-600 dark:bg-sky-500 rounded-lg hover:bg-sky-700 dark:hover:bg-sky-600 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
        >
          <Home className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
