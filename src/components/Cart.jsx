import Swal from "sweetalert2";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'


const Cart = ({cart, cartItem, setCartItem}) => {
    // console.log(cart);
    const { _id, name, brand, type, image, price, rating } = cart || {};

    const handleDelete = (_id) =>{

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://brand-shop-server-rosy.vercel.app/carts/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your product has been deleted.", "success");
                const remaining = cartItem.filter(item => item._id !== _id);
                setCartItem(remaining);
              }
            });
        }
      }); 
    }

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

          <button onClick={() => handleDelete(_id)} className="btn btn-error">Delete</button>
           
          </div>
        </div>
        </div>
        </div>
    );
};

export default Cart;