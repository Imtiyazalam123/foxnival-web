// import { createBrowserRouter } from "react-router-dom";
// import Login from "./components/login/Login";
// import Home from "./components/Home";
// import Subscribe from "./components/subscribe/Subscribe";
// import Payment from "./components/payment/Payment";
// import Dashboard from "./components/dashboard/Dashboard";
// import AssignedTask from "./components/dashboard/assignedtask";

// export const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home/>
//     },
//     {
//         path: "/login",
//         element: <Login/>
//     },
//     {
//         path: "/subscribe",
//         element: <Subscribe/>
//     },
//     {
//         path: "/payment",
//         element: <Payment/>
//     },
//     {
//         path: "/dashboard",
//         element: <Dashboard/>
//     },
//     {
//         path: "/assigntask",
//         element: <AssignedTask/>
//     },
// ])


// import { createBrowserRouter } from "react-router-dom";
// import Login from "./components/login/Login";
// import Home from "./components/Home";
// import Subscribe from "./components/subscribe/Subscribe";
// import Payment from "./components/payment/Payment";
// import Dashboard from "./components/dashboard/Dashboard";
// import AssignedTask from "./components/dashboard/assignedtask";
// import Layout from "./components/layout/layout";

// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home/>
//     },
//     {
//         path: "/login",
//         element: <Login/>
//     },
//     {
//         path: "/subscribe",
//         element: <Subscribe/>
//     },
//     {
//         path: "/payment",
//         element: <Payment/>
//     },
//     // Only dashboard-related pages wrapped in Layout
//     {
//         element: <Layout />,
//         children: [
//             {
//                 path: "/dashboard",
//                 element: <Dashboard/>
//             },
//             {
//                 path: "/assigntask",
//                 element: <AssignedTask/>
//             }
//         ]
//     }
// ]);

import { createBrowserRouter } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/Home";
import Subscribe from "./components/subscribe/Subscribe";
import Payment from "./components/payment/Payment";
import Dashboard from "./components/dashboard/Dashboard";
import AssignedTask from "./components/dashboard/assignedtask";
import ManageUser from "./components/dashboard/manageuser";
import RegisteredCustomer from "./components/dashboard/registeredcustomer";
import Help from "./components/dashboard/help";
import ManageToDoList from "./components/dashboard/managetodolist";
import StartChat from "./components/start_chats/StartChat";
import ProtectedSidebar from "./components/layout/ProtectedSidebar";
import ProtectedNavbar from "./components/layout/ProtectedNavbar";
import Subscribers from "./components/dashboard/subscribers";
import ContactUs from "./components/login/contactus";
import AboutUs from "./components/login/aboutus";
import HomeFront from "./components/login/home";
import ForgotPassword from "./components/login/forgotpassword";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/contact", 
        element: <ContactUs />
    },
    {
        path: "/home", 
        element: <HomeFront />
    },
    {
        path: "/forgotpassword", 
        element: <ForgotPassword />
    },
    {
        path: "/about", 
        element: <AboutUs />
    },
    {
        path: "/subscribe",
        element: <Subscribe />
    },
    {
        path: "/payment",
        element: <Payment />
    },
    {
        element: <ProtectedNavbar />,
        children: [
            {
                element: <ProtectedSidebar />,
                children: [
                    {
                        path: "/dashboard",
                        element: <Dashboard />
                    },
                    {
                        path: "/assigntask",
                        element: <AssignedTask />
                    },
                    {
                        path: "/manageuser",
                        element: <ManageUser />
                    },
                    {
                        path: "/startchat",
                        element: <StartChat />
                    },
                    {
                        path: "/registeredcustomer",
                        element: <RegisteredCustomer />
                    },
                    {
                        path: "/help",
                        element: <Help />
                    },
                    {
                        path: "/managetodolist",
                        element: <ManageToDoList />
                    },
                    {
                        path: "/subscribers",
                        element: <Subscribers />
                    },
                ]
            }
        ]
    }
]);