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
// import Addproduct from './components/Page/Addproduct.JSX';
import Product from './components/Page/Product';
import BrandDetails from './components/Page/BrandDetails';
import Cart from './components/Page/Cart/Cart';
import BannerSlider from './components/BannerSilder/BannerSlider';
import Details from './components/Page/Details';
import { PiRadical } from 'react-icons/pi';
import PrivateRoute from './components/Private/Private';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error></Error>,
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
      },{
        path:"/addproduct",
        element:<Product></Product>,
       
      },{
        path:"/cart",
        element:<PrivateRoute><Cart></Cart></PrivateRoute>
      }
     ,
      {
        path:"/brands/:brandName",
        element:<BrandDetails></BrandDetails>,
        loader:({params})=>fetch(`http://localhost:5000/brands/${params.brandName}`)
      },{
        path:"/brand/:_id",
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/brand/${params._id}`)
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
