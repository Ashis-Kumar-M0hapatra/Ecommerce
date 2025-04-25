import React from "react";
import {
  FaFacebookF,
  FaLinkedin,
  FaSquareGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold">ShopMe</h3>
          <p className="mt-4">
            Your one-stop shop for all your needs. We offer a wide range of
            products at unbeatable prices. Shop with us and experience the best
            online shopping experience.
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" className="underline-offset-8 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="underline-offset-8 hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/shop" className="underline-offset-8 hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="underline-offset-8 hover:underline"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Follow us</h4>
          <div className="flex space-x-4 mt-4 transform transition duration-1000">
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF
                size={24}
                className="hover:text-gray-300 hover:scale-x-125"
              />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaXTwitter
                size={24}
                className="hover:text-gray-300 hover:scale-x-125"
              />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaSquareGithub
                size={24}
                className="hover:text-gray-300 hover:scale-x-125"
              />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin
                size={24}
                className="hover:text-gray-300 hover:scale-x-125"
              />
            </a>
          </div>
          <form className="flex items-center justify-center mt-8">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-r-lg">
              Subscribe
            </button>
          </form>
        </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 ShopMe All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/" className="underline-offset-8 hover:underline transform transition-transform duration-1000">Privacy Policy</a>
            <a href="/" className="underline-offset-8 hover:underline transform transition-transform  duration-1000">Terms & Conditions</a>
          </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
