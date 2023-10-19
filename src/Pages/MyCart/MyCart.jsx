import { useLoaderData } from "react-router-dom";
import Cart from "../../components/Cart";
import { useState } from "react";

const MyCart = () => {

    const myItems = useLoaderData();
    const [cartItem, setCartItem] = useState(myItems);
    // console.log(myItems);


    return (
        <div className="container mx-auto">
            <h2 className="text-4xl font-semibold text-center my-10">My Cart Products</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {
                cartItem?.map(cart => <Cart key={cart._id} 
                  cart={cart}
                  cartItem={cartItem}
                  setCartItem={setCartItem}
                  ></Cart>)
              }
            </div>
        </div>
    );
};

export default MyCart;