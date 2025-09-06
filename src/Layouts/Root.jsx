import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
     
    </div>
  );
};

export default Root;
