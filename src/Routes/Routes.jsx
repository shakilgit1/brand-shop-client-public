import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Brand from "../components/Brand";
import Register from "../Pages/Register/Register";
import Details from "../components/Details";
import Update from "../components/Update";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://brand-shop-server-av2rh2emg-shakils-projects.vercel.app/brands')
        },
        {
          path: '/addproduct',
          element: <AddProduct></AddProduct>
        },
        {
          path: '/mycart',
          element: <MyCart></MyCart>,
          loader: () => fetch('https://brand-shop-server-av2rh2emg-shakils-projects.vercel.app/carts')
        },
        {
          path: '/brands/:id',
          element: <Brand></Brand>,
          loader: ({params}) => fetch(`https://brand-shop-server-av2rh2emg-shakils-projects.vercel.app/brands/${params.id}`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/details/:id',
          element: <Details></Details>,
          loader: ({params}) => fetch(`https://brand-shop-server-av2rh2emg-shakils-projects.vercel.app/technologies/${params.id}`)
        },
        {
          path: '/update/:id',
          element: <Update/>,
          loader: ({params}) => fetch(`https://brand-shop-server-av2rh2emg-shakils-projects.vercel.app/technologies/${params.id}`)
        }
      ]
    },
  ]);

export default router;