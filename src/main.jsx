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
import Product from './components/Page/Product';
import BrandDetails from './components/Page/BrandDetails';
import Cart from './components/Page/Cart/Cart';

import Details from './components/Page/Details';

import PrivateRoute from './components/Private/Private';
import Update from './components/Page/Update';
import ErrorPage from './components/Error/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
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
        path:"/cart/",
        element:<PrivateRoute><Cart></Cart></PrivateRoute>,
        loader:()=>fetch(`https://brand-shop-server-cyan.vercel.app
/products`)
      }
     ,
      {
        path:"/brand/:brandName",
        element:<BrandDetails></BrandDetails>,
        loader:({params})=>fetch(`https://brand-shop-server-cyan.vercel.app
/brand/${params.brandName}`)
      },{
        path:"/brands/:_id",
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params})=>fetch(`https://brand-shop-server-cyan.vercel.app
/brands/${params._id}`)
      },{
        path:'/update/:_id',
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader:({params})=>fetch(`https://brand-shop-server-cyan.vercel.app
/update/${params._id}`)
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
