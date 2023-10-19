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
      },{
        path:"/addproduct",
        element:<Product></Product>,
       
      },{
        path:"/cart",
        element:<Cart></Cart>
      },{
        path:"/profile",
        element:<BannerSlider></BannerSlider>
      }
     ,
      {
        path:"/brands/:brandName",
        element:<BrandDetails></BrandDetails>,
        loader:()=>fetch(`http://localhost:5000/brands/${brand_name}`)
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
