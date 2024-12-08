"use client"

import React, { useState } from "react";
import Link from "next/link";
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="bg-white">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          {/* Hamburger Menu for Mobile/Tablets */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Logo */}
          <FaSearch
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
              size={20}
            />
          <h1 className="text-3xl font-normal text-center flex-1 md:flex-none">
            Avion
          </h1>

          {/* Icons */}
          <div className="flex items-center space-x-4">

            <Link href="/cart">
              <FaShoppingCart
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

      {/* Divider */}
      <hr className="border-t border-gray-300 my-1 ml-6 mr-6" />

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row md:space-x-8 items-center bg-white md:bg-transparent md:ml-72 mt-4 md:mt-0 p-4 md:p-0`}
      >
        <Link href="#">
          <span className="text-gray-600 hover:text-gray-900 block md:inline-block">
            Plant Pots
          </span>
        </Link>
        <Link href="#">
          <span className="text-gray-600 hover:text-gray-900 block md:inline-block">
            Ceramics
          </span>
        </Link>
        <Link href="#">
          <span className="text-gray-600 hover:text-gray-900 block md:inline-block">
            Tables
          </span>
        </Link>
        <Link href="#">
          <span className="text-gray-600 hover:text-gray-900 block md:inline-block">
            Chairs
          </span>
        </Link>
        <Link href="#">
          <span className="text-gray-600 hover:text-gray-900 block md:inline-block">
            Crockery
          </span>
        </Link>
        <Link href="#">
          <span className="text-gray-600 hover:text-gray-900 block md:inline-block">
            Tableware
          </span>
        </Link>
        <Link href="#">
          <span className="text-gray-600 hover:text-gray-900 block md:inline-block">
            Cutlery
          </span>
        </Link>
        <Link href="/aboutus">
          <span className="text-gray-600 hover:text-gray-900 block md:inline-block">
            About Us
          </span>
        </Link>
        <Link href="/allprod">
          <span className="text-gray-600 hover:text-gray-900 block md:inline-block">
            All Products
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
