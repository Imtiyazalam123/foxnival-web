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
import RootLayout from "./components/layout/rootLayout";
import Layout from "./components/layout/layout";
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


export const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
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
            },
            // Dashboard section with its own layout
            {
                element: <Layout />,
                children: [
                    {
                        path: "/dashboard",
                        element: <Dashboard/>
                    },
                    {
                        path: "/assigntask",
                        element: <AssignedTask/>
                    },
                    {
                        path: "/manageuser",
                        element: <ManageUser/>
                    },
                    {
                        path: "/startchat",
                        element: <StartChat/>
                    },
                    {
                        path: "/registeredcustomer",
                        element: <RegisteredCustomer/>
                    },
                    {
                        path: "/help",
                        element: <Help/>
                    },
                    {
                        path: "/managetodolist",
                        element: <ManageToDoList/>
                    }
                    
                ]
            }
        ]
    }
]);