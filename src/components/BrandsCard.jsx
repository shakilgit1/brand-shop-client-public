import { Link } from "react-router-dom";

const BrandsCard = ({ item }) => {
  const {_id, brand, image} = item || {};
  // console.log(item);

  return (
    <div>
      <Link to={`/brands/${_id}`}>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="h-[300px] hover:scale-[1.05] duration-1000"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand}</h2>
          
        </div>
      </div>
      </Link>
    </div>
  );
};

export default BrandsCard;
