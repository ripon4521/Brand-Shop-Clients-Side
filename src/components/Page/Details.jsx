// import React, { useEffect, useState } from 'react';
import {  useLoaderData, useParams } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { BsPen } from 'react-icons/bs';
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import Swal from 'sweetalert2';
import { reload } from 'firebase/auth';


const Details = () => {
    const {user} = useContext(AuthContext)
    // console.log(user.email);
    const userData = user.email;


    const phone = useLoaderData();
    // const {_id , productName , price,url}= phone;
    // const cart = {
    //     userData,
    // _id, 
    // productName,
    // price, 
    // url
    // }
    // console.log(cart);
    const newData = {
        ...phone , userData
    }

    delete newData._id;
    const handleCart =  ()=>{
        fetch('https://brand-shop-server-cyan.vercel.app/product',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newData)
        }
        )
        .then(res=> res.json())
        .then (data =>{
            console.log(data);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your order has been saved to cart !',
                showConfirmButton: false,
                timer: 1500
              })
             
        })
    }

    return (
        <div className='lg:ml-[700px] ml-10 md:ml-48 mt-20 md:mt-12'>
                 <div className='border   w-[350px]  h-[550px]'>
                <div className="rating float-right mt-3 mr-4">
      <input type="radio" name="rating-1" className="mask mask-star bg-green-500" />
      <input type="radio" name="rating-1" className="mask mask-star bg-green-500"  />
      <input type="radio" name="rating-1" className="mask mask-star bg-green-500" />
      <input type="radio" name="rating-1" className="mask mask-star bg-green-500" checked />
      <input type="radio" name="rating-1" className="mask mask-star bg-green-500" />
    </div>
                    <div>
                        <img className='h-[300px] mt-5 object-cover' src={phone.url} alt="" />
                    </div>
                    <div className=' p-5'>
                        <div className='mt-3   gap-4'>
                            <h1 className='text-2xl drop-shadow-lg text-green-500 font-ranacho'>${phone.price}</h1>
                            <p className='mt-2 font-roboto font-semibold text-gray-500 text-2xl drop-shadow-lg'>{phone.productName}</p>
                           <div className='flex justify-between items-center px-2 py-3 rounded    text-white bg-green-500'>
                           <p className=' font-roboto text-xl   drop-shadow-lg'>Brand:{phone.brandName}</p>
                           <p className=' font-roboto text-xl   drop-shadow-lg'>Type: {phone.typeName}</p>
                           </div>
                        </div>
                        <p></p>
                        <div className='flex justify-center  gap-4 text-xl mt-3'>
                            <h1 onClick={handleCart}  className=' btn-outline flex gap-3 items-center hover:bg-green-500 rounded drop-shadow-lg hover:text-white px-2 border py-1'> <span>Add Cart</span>
                                <p><AiOutlineShoppingCart></AiOutlineShoppingCart></p>
                                </h1>
                           
                          
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Details;