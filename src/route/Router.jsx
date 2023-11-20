import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home";
import SignUp from "../signup/SignUp";
import Login from "../signup/Login";

const route = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        children:[
            {
                path:'/',
                element:<Home />,
                loader:({}) => fetch('http://localhost:5000/user')
            },
            {
                path:'/sign',
                element:<SignUp />
            },
            {
                path:'/login',
                element:<Login/>
            }
        ]
    }
])

export default route;