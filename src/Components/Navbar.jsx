import { Link } from "react-router";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="border-b shadow-sm">
      {/* Top Banner */}
      <div className="bg-purple-700 text-white text-center py-2 text-sm">
        <span className="font-semibold">AI is changing the game</span> | Get the skills with CMS
      </div>

      {/* Navbar */}
      <div className="navbar bg-base-100 px-6">
        {/* Left Logo */}
        <div className="flex-1">
          <Link to="/" className="text-2xl font-bold">CMS</Link>
          <button className="btn btn-ghost normal-case text-base ml-4">Explore</button>
        </div>

        {/* Search */}
        <div className="flex-none w-1/3">
          <input
            type="text"
            placeholder="Search for anything"
            className="input input-bordered w-full rounded-full"
          />
        </div>

        {/* Right */}
        <div className="flex-none gap-4 ml-6 items-center">
          <Link className="hover:underline">Plans & Pricing</Link>
          <Link className="hover:underline">Business</Link>
          <Link className="hover:underline">Teach</Link>
          <button className="btn btn-ghost text-xl">
            <FaShoppingCart />
          </button>
          <Link to="/login" className="btn btn-ghost">Log in</Link>
          <Link to="/register" className="btn btn-primary">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
