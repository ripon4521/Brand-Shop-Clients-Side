

const Slider1 = () => {
    return (
       <div className="">
       <div className="">
       <div className="flex flex-col md:flex-row container mx-auto   items-center">
            <div className="lg:ml-36 mt-10 ">
                <img className=" w-[300px] md:w-[400px] lg:w-[1500px]" src="https://i.ibb.co/V29bRD9/image-removebg-preview-3.png" alt="" />
            </div>
            <div className="ml-20">
        <h1 className="lg:text-9xl md:text-4xl text-5xl font-ranacho drop-shadow-lg text-green-500">Online Shoping </h1>
        <p className="lg:text-7xl md:text-3xl text-3xl  font-ranacho text-gray-500 mt-4 drop-shadow-lg">Special Offer</p>
        <p className="lg:text-5xl md:text-2xl text-2xl font-roboto drop-shadow-lg font-semibold mt-4 text-gray-500">Up to <span className="font-ranacho text-2xl md:text-6xl text-green-500 drop-shadow-lg">75%</span> off</p>
        <p className="mt-4 text-xl font-roboto hidden lg:block drop-shadow-lg">"Discover unbeatable deals at our phone store! Get the latest smartphones and accessories with an incredible 75% off. Don't miss this limited-time offer to upgrade your mobile experience for less. Shop now and save big!"</p>
        <button className="px-3 py-3 mt-4 text-white font-roboto text-xl drop-shadow-lg rounded bg-green-500">Shop Now</button>
            </div>
        </div>
       </div>
       </div>
    );
};

export default Slider1;