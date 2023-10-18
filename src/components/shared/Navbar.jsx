import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
   logOut()
   .then(() =>{
     return toast('Sign out success')
   })
   .catch(error =>{
     return toast(error.message);
   })
  }


  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addproduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/mycart">My Cart</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <img className="w-1/4" src="https://i.ibb.co/zN543B4/Screenshot-2-removebg-preview.png" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
      {user ? <>
            <p>{user.displayName}</p>
            <img className="w-12 rounded-full ml-2" src={user.photoURL} alt="" />
            <Link to="/login" onClick={handleLogOut} className="btn ml-2">Sign Out</Link> 
          </> :
            <Link to="/login" className="btn">Login</Link>
          }
        {/* <Link to="/login"><button className="btn">Log In</button></Link> */}
      </div>
    </div>
  );
};

export default Navbar;
