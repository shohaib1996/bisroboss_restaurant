import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes("login")
    const noHeaderFooterRegister = location.pathname.includes("register")
    return (
        <div>
            {(noHeaderFooter || noHeaderFooterRegister) || <Navbar></Navbar>}
            <Outlet></Outlet>
            {(noHeaderFooter || noHeaderFooterRegister) || <Footer></Footer>}
        </div>
    );
};

export default Main;