
import { Outlet } from "react-router";
import Navber from "../components/Navber";
import Footer from "../components/Footer";
import { Toaster } from "sonner";


const Layout = () => {

    return (
        <div className="schibsted-grotesk">
            <Navber></Navber>

            <div className="max-w-1176 mt-27">
                <Outlet></Outlet>
                <Toaster position="top-right" richColors />
            </div>

            <Footer></Footer>


        </div>
    );
};

export default Layout;