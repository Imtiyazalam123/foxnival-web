import { createBrowserRouter } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/Home";
import Subscribe from "./components/subscribe/Subscribe";
import Payment from "./components/payment/Payment";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/subscribe",
        element: <Subscribe/>
    },
    {
        path: "/payment",
        element: <Payment/>
    }
])