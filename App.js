import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
 
import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Service"
import UseCase from "./Pages/Usecase"
 
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