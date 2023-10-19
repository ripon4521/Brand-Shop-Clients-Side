import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CgDetailsMore } from 'react-icons/cg';
import { BsPen } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const BrnadCard = ({load}) => {

   const { _id} = load;

    return (
        <div className='my-16 '>
            
                
                <div className='border  w-[350px]  h-[550px]'>
                <div className="rating float-right mt-3 mr-4">
      <input type="radio" name="rating-1" className="mask mask-star bg-green-500" />
      <input type="radio" name="rating-1" className="mask mask-star bg-green-500"  />
      <input type="radio" name="rating-1" className="mask mask-star bg-green-500" />
      <input type="radio" name="rating-1" className="mask mask-star bg-green-500" checked />
      <input type="radio" name="rating-1" className="mask mask-star bg-green-500" />
    </div>
                    <div>
                        <img className='h-[300px] mt-5 object-cover' src={load.url} alt="" />
                    </div>
                    <div className=' p-5'>
                        <div className='mt-3   gap-4'>
                            <h1 className='text-2xl drop-shadow-lg text-green-500 font-ranacho'>${load.price}</h1>
                            <p className='mt-2 font-roboto font-semibold text-gray-500 text-2xl drop-shadow-lg'>{load.productName}</p>
                           <div className='flex justify-between items-center px-2 py-3 rounded    text-white bg-green-500'>
                           <p className=' font-roboto text-xl   drop-shadow-lg'>Brand:{load.brandName}</p>
                           <p className=' font-roboto text-xl   drop-shadow-lg'>Type: {load.typeName}</p>
                           </div>
                        </div>
                        <p></p>
                        <div className='flex  gap-4 text-xl mt-3'>
                            {/* <h1 className=' btn-outline hover:bg-green-500 rounded drop-shadow-lg hover:text-white px-2 border py-1'><AiOutlineShoppingCart></AiOutlineShoppingCart></h1> */}
                            <Link to={`/brand/${_id}`} className='btn-outline hover:bg-green-500 rounded drop-shadow-lg hover:text-white px-2 border py-1'><CgDetailsMore></CgDetailsMore></Link>
                            <h1 className='btn-outline hover:bg-green-500 rounded drop-shadow-lg hover:text-white px-2 border py-1'><BsPen></BsPen></h1>
                        </div>
                    </div>
                </div>
            
           
           
        </div>
    );
};

export default BrnadCard;