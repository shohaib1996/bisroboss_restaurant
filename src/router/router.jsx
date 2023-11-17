import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "../PrivateRoute/AdminRoute";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/our-menu",
                element: <Menu></Menu>
            },
            {
                path: "/our-shop",
                element: <Order></Order>
            },
            {
                path: "/our-shop/:title",
                element: <Order></Order>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "userHome",
                element: <UserHome></UserHome>
            },
            {
                path: "cart",
                element: <Cart></Cart>
            },
            {
                path: "users",
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: "addItems",
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path:"manageItems",
                element: <ManageItems></ManageItems>
            }
            
        ]
    }
])
export default router;