import { useLoaderData } from "react-router-dom";
import BannerSlider from "../BannerSilder/BannerSlider";
import BrnadCard from "./BrnadCard";




const BrandDetails = () => {
  
    
  const loader = useLoaderData();
//   console.log(loader);

    return (
        <div>
            <BannerSlider>

            </BannerSlider>



    <div className="mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
  
    {
        loader.map(load =>  <BrnadCard key={load._id} load={load}></BrnadCard> )
    }
    </div>
        </div>
       
    );
};

export default BrandDetails;