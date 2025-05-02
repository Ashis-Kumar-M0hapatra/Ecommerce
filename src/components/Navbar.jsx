import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; // Add this if not already present
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/productlist?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-xl">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link
            to="/"
            className="text-red-900 hover:text-red-500 drop-shadow-lg duration-500"
          >
            ShopMe
          </Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search For a Product"
              className="w-full border py-2 px-4 shadow-lg"
            />
            <button type="submit">
              <FaSearch className="absolute top-3 right-3 text-red-900 duration-500 hover:text-red-500 cursor-pointer drop-shadow-lg" />
            </button>
          </form>
        </div>
        <div className="flex items-center space-x-4 relative">
          <Link
            to="/cart"
            className="text-lg text-red-900 duration-500 hover:text-red-500"
          >
            <FaShoppingCart className="drop-shadow-lg" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold text-red-900">
        <Link
          to="/"
          className="underline-offset-8 hover:underline hover:text-red-500 duration-500"
        >
          Home
        </Link>
        <Link
          to="/"
          className="underline-offset-8 hover:underline hover:text-red-500 duration-500"
        >
          About
        </Link>
        <Link
          to="/productlist"
          className="underline-offset-8 hover:underline hover:text-red-500 duration-500"
        >
          Shop
        </Link>
        <Link
          to="/"
          className="underline-offset-8 hover:underline hover:text-red-500 duration-500"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
