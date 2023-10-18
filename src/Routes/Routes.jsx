import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Brand from "../components/Brand";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('http://localhost:5000/brands')
        },
        {
          path: '/addproduct',
          element: <AddProduct></AddProduct>
        },
        {
          path: '/mycart',
          element: <MyCart></MyCart>
        },
        {
          path: '/brands/:id',
          element: <Brand></Brand>,
          loader: ({params}) => fetch(`http://localhost:5000/brands/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
      ]
    },
  ]);

export default router;