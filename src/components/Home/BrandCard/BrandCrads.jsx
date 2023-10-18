

const BrandCrads = ({brand}) => {
    console.log(brand);
    return (
        <div className="hover:scale-105 hover:transition-transform hover:duration-500 hover:ease-in-out  w-[300px]">
    <img className="w-[250px] h-[150px]  flex" src={brand.img} alt="" />

    <p className="text-center text-green-500 drop-shadow-lg mr-12 text-4xl my-4 font-ranacho">{brand.brand_name}</p>

    </div>


    );
};

export default BrandCrads;