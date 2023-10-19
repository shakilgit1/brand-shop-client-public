import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Details = () => {
  const {user} = useContext(AuthContext);
  const singleData = useLoaderData();
 
  // useEffect(() =>{
  //   fetch('https://brand-shop-server-av2rh2emg-shakils-projects.vercel.app/carts')
  //   .then(res  => res.json())
  //   .then(data => {
  //      const filterData = data.find(add => add._id === singleData._id);
  //      if(filterData){
  //       setFindData(true);
        
  //      }else{
  //       console.log('not found');
  //      }
  //      console.log(filterData);
      
  //   })
  // }, [])

  const { _id, name, brand, type, image, price, description, rating } = singleData || {};

  const handleAddTOCart = () =>{
    
    fetch(`https://brand-shop-server-av2rh2emg-shakils-projects.vercel.app/carts`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({...singleData, email: user.email})
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Add to cart Successfully ',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            console.log(data);
        }
    })
  }


  return (
    <div>

      <div className="mx-auto mt-8 md:flex justify-center gap-4 lg:gap-20">
        <div className="hover:scale-[1.05] duration-1000 bg-base-100 shadow-xl p-4">
          <figure>
            <img className="h-[280px] w-full" src={image} alt="Shoes" />
          </figure>
          <div className=" mx-auto">
            <h2 className="card-title font-bold text-center my-6">{name}</h2>

            <div className="">
            <button onClick={handleAddTOCart}
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700 btn">
             Add to Cart
            </button>
            </div>
          </div>
        </div>

        <div className="mt-4 mb-8 hover:scale-[1.05] duration-1000">
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 className="mb-4 text-2xl font-medium text-gray-900 dark:text-gray-400">
            Brand: {brand}
            </h5>
            <h5 className="mb-4 text-5xl font-medium text-black dark:text-gray-400">
            Price: {price}
            </h5>
            <h5 className="mb-4 text-xl font-medium text-gray-600 dark:text-gray-400">
            Type:  {type}
            </h5>
            <p className="">{description}</p>
            <div className="flex items-baseline text-gray-900 dark:text-white mb-4">
              <span className="text-5xl font-extrabold tracking-tight">{}</span>
              <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400"></span>
            </div>
            <p className="text-center flex gap-4 font-semibold">
             <span className="border-l-2 px-2"></span>
            </p>
           
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
