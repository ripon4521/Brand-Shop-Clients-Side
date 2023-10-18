const Banner = () => {
    return (
        <div className="bg-gray-200">
             <div className="container px-3 py-4  mx-auto">
        <div className="items-center justify-between gap-10 lg:flex">
        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-[300px] py-10 rotate-12 mt-16 h-[550px] lg:max-w-3xl" src="https://i.ibb.co/VqwQ6sQ/green-1q1v4ia8oaq2-large-removebg-preview.png" alt="Catalogue-pana.svg"/>
            </div>

            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <p className="text-2xl my-3 font-bold drop-shadow-2xl font-ranacho text-green-500">New Collection</p>
                    <h1 className="text-3xl font-roboto font-extrabold drop-shadow-2xl   lg:text-5xl">Buy iPhone 15 Pro and iPhone 15 Pro Max - your <span className="text-green-500  font-roboto">Apple</span></h1>
                    
                    <p className="mt-3 font-roboto ">Get $40 - $650 off iPhone 15 Pro or iPhone 15 Pro Max when you trade in an iPhone 7 or newer. 0% financing available. Buy now with free shipping.</p>
                    
                    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-green-600 rounded-lg lg:w-auto hover:bg-green-500 focus:outline-none focus:bg-green-500">Shop Now</button>
                </div>
            </div>

            
        </div>
    </div>

        </div>
    );
};

export default Banner;