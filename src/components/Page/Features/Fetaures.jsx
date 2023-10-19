
import { MdOutlineLocalShipping } from 'react-icons/md';
import { AiOutlineCreditCard ,AiFillApple } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BsEmojiSmile } from 'react-icons/bs';
import { PiTrademarkThin } from 'react-icons/pi';

const Fetaures = () => {
    return (
        <div className=' my-10'>
            <h1 className='container mb-7 text-green-500 drop-shadow-lg mx-auto font-roboto text-3xl'><span className='font-ranacho text-6xl drop-shadow-lg  text-gray-500'>Help</span> is here. Whenever and however <br />you need it.</h1>
            <div className=" bg-gray-50  ">
          <div className='container mx-auto  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 pl-16 md:pl-0 lg:pl-0 gap-5 '>
          <div className='float-left my-5 bg-white shadow-lg rounded-2xl px-6 py-4 w-[250px]'>
               <p className='text-6xl text-green-500'><MdOutlineLocalShipping></MdOutlineLocalShipping></p> 
               <h1 className='font-roboto text-xl drop-shadow-lg'>Enjoy <span className='text-green-500'>two-hour delivery </span> from an Apple Store,  <span className='text-green-500'> free delivery</span>, or <span className='text-green-500'>easy pickup.²</span></h1>
            </div>

            <div className='float-left my-5 bg-white shadow-lg rounded-2xl px-6 py-4 w-[250px]'>
               <p className='text-6xl text-blue-500'><AiOutlineCreditCard></AiOutlineCreditCard></p> 
               <h1 className='font-roboto text-xl drop-shadow-lg'> <span className='text-blue-500'>Trade in your current device. </span> Get credit toward a new one .</h1>
            </div>

            <div className='float-left my-5 bg-white shadow-lg rounded-2xl px-6 py-4 w-[250px]'>
               <p className='text-6xl text-green-500'><HiOutlineShoppingBag></HiOutlineShoppingBag></p> 
               <h1 className='font-roboto text-xl drop-shadow-lg'>Pay in full or  <span className='text-green-500'>pay over time. </span> Your choice.</h1>
            </div>

            <div className='float-left my-5 bg-white shadow-lg rounded-2xl px-6 py-4 w-[250px]'>
               <p className='text-6xl text-purple-600'><BsEmojiSmile></BsEmojiSmile></p> 
               <h1 className='font-roboto text-xl drop-shadow-lg'>Make them yours. <span className='text-purple-500'> Engrave a mix of emoji, names, and numbers for free.</span> </h1>
            </div>

            <div className='float-left my-5 bg-white shadow-lg rounded-2xl px-6 py-4 w-[250px]'>
               <p className='text-6xl text-orange-400'><AiFillApple></AiFillApple></p> 
               <h1 className='font-roboto text-xl drop-shadow-lg'><span className='text-orange-400'>Customize</span> your Mac and create your own style of Apple Watch.</h1>
            </div>

            <div className='float-left my-5 bg-white  shadow-lg rounded-2xl px-6 py-4 w-[250px]'>
               <p className='text-6xl text-pink-600'><PiTrademarkThin></PiTrademarkThin></p> 
               <h1 className='font-roboto  text-xl drop-shadow-lg'><span className='text-pink-500'>Trade in your current device. </span> Get credit toward a new one.3</h1>
            </div>

          </div>
            </div>
            
        </div>
    );
};

export default Fetaures;