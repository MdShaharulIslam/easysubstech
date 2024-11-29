import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main/Main";
import Home from "../Component/Pages/Home/Home";
import About from "../Component/Pages/About/About";

// Create the router
export const router = createBrowserRouter([
  {
    path: "/", // Root path
    element: <Main></Main>, // Main layout with navigation
    children: [
      {
        path: "/", 
        element: <Home></Home>, 
      },
      {
        path: "/about", 
        element: <About></About>, 
      },
    
    ],
  },
]);
