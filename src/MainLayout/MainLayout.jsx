import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MainLayout = () => {
    const { isDarkMode} = useContext(AuthContext);
    return (
        <div className={` ${isDarkMode ? 'bg-black' : ''}`}>
            <div className="sticky top-0 z-10">
            <Navbar></Navbar>
            </div>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;