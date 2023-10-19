import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Products from "./Products";


const Brand = () => {
    const brands = useLoaderData();
    const {banner1, banner2, banner3} = brands;
    const [allData, setAllData] = useState([]);
    // console.log(allData);
    // console.log(brand);
    
    useEffect(() =>{
        fetch('https://brand-shop-server-av2rh2emg-shakils-projects.vercel.app/technologies')
        .then(res => res.json())
        .then(data => {
            const dataFilter = data.filter(item => item.brand.toLowerCase() === brands.brand.toLowerCase());
            setAllData(dataFilter)
            // console.log(dataFilter);
            // console.log(data);
        })
    }, [brands.brand])



    return (
        <div className="mb-20">

        <div>
        <div className="carousel  w-full h-[70vh]">
        
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={banner1}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={banner2}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={banner3}
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        </div>
        </div>

            <h3 className="text-4xl font-bold mb-12 text-center mt-8">Our {brands.brand} Products</h3>

            {allData.length === 0 ? 
            <div className="h-32 ">
            <p className="text-center text-5xl font-bold">No products available</p>
            </div> :
            
            <div className="grid md:grid-cols-2  gap-8 px-8 container mx-auto min-h-screen ">
            {
             allData?.map(item => <Products key={item._id} item={item}></Products>)
            }
           </div>
            }
          
        </div>
    );
};

export default Brand;