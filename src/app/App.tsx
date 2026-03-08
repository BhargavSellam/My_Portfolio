import { ThemeProvider } from './contexts/ThemeContext';
import { RouterProvider } from 'react-router';
import { router } from './routes';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;