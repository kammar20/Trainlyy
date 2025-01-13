import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layout
import RootLayout from './layout/RootLayout';

// Page
import HomePage from './pages/HomePage';
import ExerciseDetailPage from './pages/ExerciseDetailPage';
import Error404Page from './pages/Error404Page';
import { ExerciseProvider } from './context/ExerciseContext';

export default function App() {
  const myRouter = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: 'exerciseDetails/:id',
          element: <ExerciseDetailPage />,
        },
      ],
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
