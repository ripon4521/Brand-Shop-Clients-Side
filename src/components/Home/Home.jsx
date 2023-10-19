import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BrandCrads from "./BrandCard/BrandCrads";
import Fetaures from "../Page/Features/Fetaures";
import OtherFeauers from "../Page/Features/OtherFeauers";
import Aditin from "../Page/Features/Aditin";
import Footer from "../Page/Footer/Footer";


const Home = () => {
    const brands = useLoaderData();
    // console.log(brands);

    return (
        <div>
            <Banner></Banner>
           {/* <BrandCrads></BrandCrads> */}

            <h1 className="container mx-auto my-10  font-roboto  drop-shadow-2xl text-4xl"><span className="text-gray-600 text-6xl drop-shadow-lg font-ranacho">Store.</span> <span className="text-green-500 drop-shadow-lg" >The best way to buy the <br /> products you love.</span></h1>
       <div className="bg-gray-100">
       <div  className="my-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
           {
            brands.map(brand => <BrandCrads brand={brand} key={brand.id}></BrandCrads>)
           }
        </div>
       
      
     
        
       </div>


       <div >
       <Fetaures></Fetaures>
       <OtherFeauers></OtherFeauers>
       <Aditin></Aditin>
       
       </div>
       <div>
       <Footer></Footer>
       </div>
       
        </div>
    );
};

export default Home;