import { Link } from "react-router-dom";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

const Products = ({ item }) => {
  const { _id, name, brand, type, image, price, rating } =
    item || {};

  return (
    <div>
      <div className="w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-center">
        <img
            className="w-full p-8 rounded-t-lg h-[250px] hover:scale-[1.05] duration-1000"
            src={image}
            alt="product image"
          />
        </div>
        <div className="px-5 pb-5">
         
            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {name}
            </h5>
            <h5 className="text-xl font-semibold  text-blue-400">
               Brand: {brand}
            </h5>
            <h5 className="text-lg font-semibold  text-purple-400">
              Type:  {type}
            </h5>
         
          <div className="flex justify-between">
          <div className="flex items-center mt-2.5 mb-5 text-2xl">
          <Rater total={5} rating={rating} />      
          </div>
          <div>
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
             ${price}
            </span>
          </div>
          </div>
          <div className="items-center gap-8 flex">
           
            <Link to={`/details/${_id}`}>
              <button className="btn btn-info">Details</button>
            </Link>
            <Link to={`/update/${_id}`}>
              <button className="btn btn-success">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
