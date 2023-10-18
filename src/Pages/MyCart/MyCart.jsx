import { useLoaderData } from "react-router-dom";
import Cart from "../../components/Cart";

const MyCart = () => {

    const myItems = useLoaderData();
    console.log(myItems);


    return (
        <div className="container mx-auto">
            <h2 className="text-4xl font-semibold text-center my-10">My Cart Products</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {
                myItems?.map(cart => <Cart key={cart._id} cart={cart}></Cart>)
              }
            </div>
        </div>
    );
};

export default MyCart;