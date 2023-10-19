import { useLoaderData } from "react-router-dom";




const BrandDetails = () => {
  
    
  const loader = useLoaderData();
  console.log(loader);
//   const {brandName} = useParams();
// //   console.log(brandName);
//   const filter = loader.filter(item => item.brandName === brandName);
//   console.log(filter);
// //   console.log(loader);
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
};

export default BrandDetails;