import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar";


const Layout = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;