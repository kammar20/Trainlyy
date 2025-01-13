import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Context Provider
import { ExerciseProvider } from './context/ExerciseContext';

// Page
import HomePage from './pages/HomePage';
import ExerciseDetailPage from './pages/ExerciseDetailPage';
import Error404Page from './pages/Error404Page';

export default function App() {
  const myRouter = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: 'exerciseDetails/:id',
      element: <ExerciseDetailPage />,
    },
    {
      path: '*',
      element: <Error404Page />,
    },
  ]);

  return (
    <ExerciseProvider>
      <RouterProvider router={myRouter} />
    </ExerciseProvider>
  );
}
