import React from "react";
import Link from "next/link";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-white">
      <header className="bg-white">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">

        <FaSearch
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
              size={20}
            />
          <h1 className="text-3xl font-normal text-center">Avion</h1>

          <div className="flex items-center space-x-4">
            <Link href="./cart">             <FaShoppingCart
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                size={20}
              />
              </Link>
              <FaUser
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                size={20}
              />
            </div>
        </div>
      </header>


      <hr className="border-t border-gray-300 my-1 ml-6 mr-6" />

      <div className="hidden md:flex space-x-8 ml-96 pt-4">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Plant pots
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Ceramics
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Tables
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Chairs
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Crockery
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Tableware
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Cutlery
        </a>
      </div>
    </div>
  );
};

export default Header;

