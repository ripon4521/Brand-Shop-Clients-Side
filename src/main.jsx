import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from './Layout/Layout.jsx';
import AuthProvider from './components/Auth/AuthProvider';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[{
      path:"/",
      element:<Home></Home>,
      loader:()=>fetch('/brand.json')
    },
      {
        path:"/login",
        element:<Login></Login>
      },{
        path:"/signup",
        element:<SignUp></SignUp>
      }
    ]

 
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
