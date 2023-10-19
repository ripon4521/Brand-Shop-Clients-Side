import React from 'react';

const Slider2 = () => {
    return (
        <div>
             <div className="">
       <div className="flex flex-col md:flex-row container mx-auto   items-center">
            <div className="lg:ml-36 mt-10 ">
                <img className="w-[300px]  md:w-[800px] rotate-6" src="https://o.remove.bg/downloads/9aa6c579-1f7c-4a30-a49b-9fd02913766a/Apple_iphone_11-rosette-family-lineup-091019_big.jpg.large-removebg-preview.png" alt="" />
            </div>
            <div className="ml-20">
            <p className="lg:text-4xl md:text-3xl text-2xl  font-ranacho text-gray-500 mt-4 drop-shadow-lg">Simple & Modern</p>
        <h1 className="lg:text-9xl md:text-4xl text-5xl font-ranacho drop-shadow-lg text-green-500">BEST SALE </h1>
        
       
        <p className="mt-4 hidden md:block text-xl font-roboto drop-shadow-lg">" Don't miss this limited-time offer to upgrade your mobile experience for less. Shop now and save big!"</p>
        <button className="px-3 py-3 mt-4 text-white font-roboto text-xl drop-shadow-lg rounded bg-green-500">Shop Online</button>
            </div>
        </div>
       </div>
        </div>
    );
};

export default Slider2;