import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const phone = useLoaderData()
    const{ productName, brandName , typeName , rating,url,price} = phone;
    console.log(phone);

    const handleUpdateProduct =(e)=>{
        e.preventDefault();
        const form = e.target;
        const productName = form.name.value;
        const brandName = form.brand.value;
        const typeName = form.type.value;
        const rating = form.rating.value;
        const url = form.url.value;
        const price = form.price.value;
     
const updateProduct = {
    productName,
    brandName,
    typeName,
    rating,
    price,
    url
}
// console.log(newProduct);

    fetch(`https://brand-shop-server-cyan.vercel.app
/update/${phone._id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(updateProduct)
  
    })
    
    .then(res=>res.json())
    .then(data => {
        console.log(data)
        if (data. modifiedCount > 0) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your product has been updated',
                showConfirmButton: false,
                timer: 1500
              })

           
        }
    })

   

    }

    return (
        <div>
          

            <div className='bg-gray-100 h-screen'>
   
   <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14  mx-auto">
     <div className="max-w-xl mx-auto">
       <div className="text-center">
         <h1 className="text-3xl font-bold drop-shadow-lg mt-10  text-green-500 sm:text-4xl dark:text-green"> <span className="text-gray-500">{productName} </span>
        Update Your Product here !
         </h1>
   
         <p className="mt-1 text-green-600 dark:text-green-400">
     
         </p>
       </div>
   
       <div className="mt-16">
       
         <form onSubmit={handleUpdateProduct} >
           <div className="grid gap-4 lg:gap-6">
    
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
               <div>
                 <label className="block drop-shadow-lg text-green-500 mb-2 font-roboto ">Product Name</label>
                 <input defaultValue={phone.productName} required name='name' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product name here"/>
               </div>
   
               <div>
                 <label  className="block drop-shadow-lg text-green-500 mb-2 font-roboto">Brand Name</label>
                 <input defaultValue={phone.brandName} type="text" name='brand' className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write brand name here"/>
               </div>
   
             </div>
   
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
               <div>
                 <label className="block drop-shadow-lg text-green-500 mb-2 font-roboto ">Type Of Products</label>
                 <input defaultValue={phone.typeName} name='type' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product type here"/>
               </div>
   
               <div>
                 <label  className="block drop-shadow-lg text-green-500 mb-2 font-roboto">Rating</label>
                 <input defaultValue={phone.rating} name='rating' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product rating here"/>
               </div>
             </div>
   
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
               <div>
                 <label className="block drop-shadow-lg text-green-500 mb-2 font-roboto ">Price</label>
                 <input defaultValue={phone.price} name='price' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product price here"/>
               </div>
   
               <div>
                 <label  className="block drop-shadow-lg text-green-500 mb-2 font-roboto">Photo URL</label>
                 <input defaultValue={phone.url} name='url' type="text" className="block w-full py-3 font-roboto  border rounded-lg px-11 focus:border-green-400 dark:focus:border-green-300 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Write product photo url here"/>
               </div>
             </div>
        
           
           
   
   
  
   
           </div>
         
   
           <div className="mt-6 grid">
             <button type="submit" className="inline-flex justify-center items-center gap-x-3 text-center bg-green-600 hover:bg-green-700 border border-transparent text-sm lg:text-base text-white font-roboto drop-shadow-lg font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-green-800">Update Product</button>
           </div>
   
         
         </form>
      
       </div>
     </div>
   </div>
   
           </div>
        </div>
    );
};

export default Update;