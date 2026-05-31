import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 md:h-16 py-4   flex flex-col items-start md:flex-row  gap-7 md:items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-700">
          ShopHub
        </Link>

        {/* Nav Links */}
        <div className="flex gap-8">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-700 font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to="/cart"
            className="text-gray-600 hover:text-blue-700 font-medium transition-colors"
          >
            Cart
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-3">
          <Link
            to="/login"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2  rounded-md font-medium transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="border border-gray-300 hover:bg-gray-100 text-gray-700 px-6 py-2 rounded-md font-medium transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
