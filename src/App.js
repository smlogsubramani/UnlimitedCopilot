import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Service';
import UseCase from './Pages/Usecase';
import ProductDetails from './Pages/ProductDetails';

const ErrorPage = () => {
  return (
    <div className="error-page" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <button
        onClick={() => window.location.href = '/'}
        style={{
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#666',
          color: 'white',
          cursor: 'pointer',
          marginTop: '1rem'
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/service',
    element: <Services />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/usecase',
    element: <UseCase />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/product/:id',
    element: <ProductDetails />,
    errorElement: <ErrorPage />,
  },
]);

const Router = () => (
  <div>
    <RouterProvider router={router} />
  </div>
);

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;