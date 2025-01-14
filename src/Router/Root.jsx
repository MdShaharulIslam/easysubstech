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
import Payment from './../Component/Payment/Payment';
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Component/Dashboard/Dashboard";
import AddServices from "../Component/Pages/Services/AddServices";
import TermsAndConditions from "../Component/Pages/PrivecyPolicy/TermsAndConditions";

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
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/payment",
        element: <PrivateRoute><Payment></Payment></PrivateRoute>,
      },
      {
        path: '/AddServices',
        element: <AddServices></AddServices>
      },
      
      {
        path: '/TermsAndConditions',
        element: <TermsAndConditions></TermsAndConditions>
      },
      {
        path: "/dashboard",
        element: <PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>,
      },

    ],
  },
]);