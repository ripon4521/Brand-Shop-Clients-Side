import { Link, useParams } from "react-router-dom";


const BrandCrads = ({brand}) => {
    const {brand_name}=brand;
// const loader = useLoaderData();
// console.log(loader);
    // console.log(brand);
    return (
<Link to={`/brands/${brand_name}`}>
<div  className="hover:scale-105 hover:transition-transform hover:duration-500 hover:ease-in-out ml-24 md:ml-16  lg::ml-10   w-[300px] h-[150px]">
    <img className="w-[200px] h-[100px]  flex" src={brand.img} alt="" />

    <p className="text-center text-green-500 drop-shadow-lg mr-24 pb-3 text-4xl  font-ranacho">{brand.brand_name}</p>

    </div>
</Link>


    );
};

export default BrandCrads;