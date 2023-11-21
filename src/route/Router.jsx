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
                loader:({}) => fetch('https://server-job-task.vercel.app/user/ka')
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