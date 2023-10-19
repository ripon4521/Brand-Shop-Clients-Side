import React from 'react';

const Slider2 = () => {
    return (
        <div>
             <div className="">
       <div className="flex container mx-auto   items-center">
            <div className="lg:ml-36 mt-10 ">
                <img className=" w-[1500px]" src="https://i.ibb.co/V29bRD9/image-removebg-preview-3.png" alt="" />
            </div>
            <div className="ml-20">
        <h1 className="text-9xl font-ranacho drop-shadow-lg text-green-500">Online Shoping </h1>
        <p className="text-7xl  font-ranacho text-gray-500 mt-4 drop-shadow-lg">Special Offer</p>
        <p className="text-5xl font-roboto drop-shadow-lg font-semibold mt-4 text-gray-500">Up to <span className="font-ranacho text-6xl text-green-500 drop-shadow-lg">75%</span> off</p>
        <p className="mt-4 text-xl font-roboto drop-shadow-lg">"Discover unbeatable deals at our phone store! Get the latest smartphones and accessories with an incredible 75% off. Don't miss this limited-time offer to upgrade your mobile experience for less. Shop now and save big!"</p>
        <button className="px-3 py-3 mt-4 text-white font-roboto text-xl drop-shadow-lg rounded bg-green-500">Shop Now</button>
            </div>
        </div>
       </div>
        </div>
    );
};

export default Slider2;