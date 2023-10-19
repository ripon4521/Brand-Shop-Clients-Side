import React from 'react';
import Swal from 'sweetalert2';

const Product = () => {
    const handleAddProduct =(e)=>{
        e.preventDefault();
        const form = e.target;
        const productName = form.name.value;
        const brandName = form.brand.value;
        const typeName = form.type.value;
        const rating = form.rating.value;
        const url = form.url.value;
        const price = form.price.value;
        const description = form.desc.value;
const newProduct = {
    productName,
    brandName,
    typeName,
    rating,
    price,description,
    url
}
console.log(newProduct);

    fetch('https://brand-shop-server-qpd4wio2i-dev-ripons-projects.vercel.app/brand',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(newProduct)
  
    })
    
    .then(res=>res.json())
    .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your product has been added!',
            showConfirmButton: false,
            timer: 1500
          })

           
        }
    })

   

    }


    return (
        <div className='bg-gray-100 h-screen'>
   
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14  mx-auto">
  <div className="max-w-xl mx-auto">
    <div className="text-center">
      <h1 className="text-3xl font-bold drop-shadow-lg mt-10  text-green-500 sm:text-4xl dark:text-green">
     Add Your Product here !
      </h1>

      <p className="mt-1 text-green-600 dark:text-green-400">
  
      </p>
    </div>

    <div className="mt-16">
    
      <form onSubmit={handleAddProduct}>
        <div className="grid gap-4 lg:gap-6">
 
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label className="block drop-shadow-lg text-green-500 mb-2 font-roboto ">Product Name</label>
              <input required name='name' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product name here"/>
            </div>

            <div>
              <label  className="block drop-shadow-lg text-green-500 mb-2 font-roboto">Brand Name</label>
              <input type="text" name='brand' className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write brand name here"/>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label className="block drop-shadow-lg text-green-500 mb-2 font-roboto ">Type Of Products</label>
              <input name='type' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product type here"/>
            </div>

            <div>
              <label  className="block drop-shadow-lg text-green-500 mb-2 font-roboto">Rating</label>
              <input name='rating' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product rating here"/>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label className="block drop-shadow-lg text-green-500 mb-2 font-roboto ">Price</label>
              <input name='price' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product price here"/>
            </div>

            <div>
              <label  className="block drop-shadow-lg text-green-500 mb-2 font-roboto">Photo URL</label>
              <input name='url' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product photo url here"/>
            </div>
          </div>
     
        
        


<div>
<div>
              <label  className="block drop-shadow-lg text-green-500 mb-2 font-roboto">Short Description</label>
              <input name='desc' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product description"/>
            </div>
</div>

        </div>
      

        <div className="mt-6 grid">
          <button type="submit" className="inline-flex justify-center items-center gap-x-3 text-center bg-green-600 hover:bg-green-700 border border-transparent text-sm lg:text-base text-white font-roboto drop-shadow-lg font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-green-800">Add Product</button>
        </div>

      
      </form>
   
    </div>
  </div>
</div>

        </div>
    );
};

export default Product;