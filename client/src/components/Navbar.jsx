import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 shadow-md">
      <h1 className="text-2xl font-bold text-red-500">Livspace</h1>

      <ul className="hidden md:flex gap-8 font-medium">
        <Link to="/">Home</Link>
        <Link to="/info">Info</Link>
        <li>Designs</li>
        <li>Pricing</li>
      </ul>

      <button className="bg-red-500 text-white px-5 py-2 rounded-xl">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;