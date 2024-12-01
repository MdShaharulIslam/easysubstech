import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main/Main";
import Home from "../Component/Pages/Home/Home";
import About from "../Component/Pages/About/About";
import Checkout from './../Component/Pages/Checkout/Checkout';
import ContactUs from "../Component/Pages/Contact/Contact";
import Services from "../Component/Pages/Services/Services";
import ReturnPolice from "../Component/ReturnPolice/ReturnPolice";

import SignUp from './../Component/Pages/SignUp/SignUp';
import Login from './../Component/Pages/Login/Login';

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
      {
        path: "/checkout", 
        element: <Checkout></Checkout>, 
      },
      {
        path: "/contact", 
        element: <ContactUs></ContactUs>, 
      },
      {
        path: "/services", 
        element: <Services></Services>, 
      },
      {
        path: "/ReturnPolice", 
        element: <ReturnPolice></ReturnPolice>, 
      },
      {
        path: "/register", 
        element: <SignUp></SignUp> , 
      },
      {
        path: "/login", 
        element: <Login></Login> , 
      },
    
    ],
  },
]);
