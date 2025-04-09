import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
 
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Service"
import UseCase from "./pages/Usecase"
 
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
      path: "/service",
      element: <Services/>
    },
    {
      path: "/Usecase",
      element: <UseCase/>
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