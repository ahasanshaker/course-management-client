import { Outlet } from "react-router";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <div className="min-h-[80vh] container mx-auto px-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
