/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import { FaSearch, FaShoppingCart, FaUser, FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";
import React from "react";
import Link from 'next/link';
import Image from 'next/image';

const Cart = () => {
  return (
    <div>
      <header className="bg-white">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          <FaSearch className="text-gray-600 hover:text-gray-900 cursor-pointer" size={20} />
          <h1 className="text-3xl font-normal text-center">Avion</h1>
          <div className="flex items-center space-x-4">
            <Link href="/cart">
              <FaShoppingCart className="text-gray-600 hover:text-gray-900 cursor-pointer" size={20} />
            </Link>
            <FaUser className="text-gray-600 hover:text-gray-900 cursor-pointer" size={20} />
          </div>
        </div>
      </header>

      <hr className="border-t border-gray-300 my-1 ml-6 mr-6" />

      <div className="hidden md:flex space-x-8 ml-96 pt-4 mb-4">
        <Link href="#" className="text-gray-600 hover:text-gray-900">Plant pots</Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">Ceramics</Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">Tables</Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">Chairs</Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">Crockery</Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">Tableware</Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">Cutlery</Link>
      </div>

      <div className="bg-gray-100 w-full px-4 sm:px-10 lg:px-40 pt-10 pb-16 h-auto text-custom-purple">
        <h1 className="text-4xl sm:text-3xl text-center lg:text-left">Your Shopping Cart</h1>
        <div className="flex pt-8">
          <p className="text-xl font-normal ml-10">Products</p>
          <p className="text-xl font-normal ml-96">Quantity</p>
          <p className="text-xl font-normal ml-96">Total</p>
        </div>

        <hr className="border-t border-gray-300 my-1 ml-6 mr-6 pt-2" />

        <div className="flex ml-10 pt-5">
          <img
            src="/img/Product Image.png"
            alt="Product 1"
            className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1" />
          <div className="ml-6">
            <h1 className="text-base sm:text-lg font-medium">Graystone vase</h1>
            <p className="text-sm mt-2">A timeless ceramic vase with a tri-color grey glaze.</p>
            <p className="mt-2 text-base font-semibold">£85</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg font-normal ml-24">1</p>
          </div>
          <div className="sm:hidden lg:block">
            <p className="ml-96 text-lg font-medium">£85</p>
          </div>
        </div>

        <div className="flex ml-10 pt-5">
          <img
            src="/img/Product Image 2.png"
            alt="Product 2"
            className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-y-1" />
          <div className="ml-6">
            <h1 className="text-base sm:text-lg font-medium">Basic white vase</h1>
            <p className="text-sm mt-2">Beautiful and simple, this is one for the classics.</p>
            <p className="mt-2 text-base font-semibold">£125</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg font-normal ml-32">1</p>
          </div>
          <div className="sm:hidden lg:block">
            <p className="ml-96 text-lg font-medium">£125</p>
          </div>
        </div>

        <hr className="border-t border-gray-300 my-1 ml-6 mr-6 mt-8" />

        <div className="mt-8 text-center lg:text-right">
          <h1 className="inline text-lg sm:text-xl font-normal mr-2">Subtotal</h1>
          <h1 className="inline text-xl sm:text-2xl mr-2 font-medium">£210</h1>
          <p className="mt-4">Taxes and shipping are calculated at checkout</p>
          <button className="bg-violet-950 h-12 sm:h-14 mt-6 w-full sm:w-56 rounded-sm text-white">Go to checkout</button>
        </div>
      </div>

      <div className="h-96 bg-violet-950">
        <div className="flex space-x-8 pt-10 pl-20 font-normal">
          <div>
            <h1 className="text-white text-lg font-Clash Display">Menu</h1>
            <p className="text-white mt-4 text-sm">New arrivals</p>
            <p className="text-white mt-4 text-sm">Best seller</p>
            <p className="text-white mt-4 text-sm">Recently Viewed</p>
            <p className="text-white mt-4 text-sm">Popular this week</p>
            <p className="text-white mt-4 text-sm">All Products</p>
          </div>
          <div>
            <h1 className="text-white text-lg font-normal Display ml-20">Category</h1>
            <p className="text-white mt-4 text-sm ml-20">Crockery</p>
            <p className="text-white mt-4 text-sm ml-20">Furniture</p>
            <p className="text-white mt-4 text-sm ml-20">Homeware</p>
            <p className="text-white mt-4 text-sm ml-20">Plants pot</p>
            <p className="text-white mt-4 text-sm ml-20">Chair</p>
            <p className="text-white mt-4 text-sm ml-20">Crockery</p>
          </div>
          <div className="pl-28">
            <h1 className="text-white text-lg font-normal Display">Our Company</h1>
            <Link href="/aboutus" className="text-white mt-4 text-sm">About Us</Link>
            <p className="text-white mt-4 text-sm">Vacancies</p>
            <p className="text-white mt-4 text-sm">Contact Us</p>
            <p className="text-white mt-4 text-sm">Privacy</p>
            <p className="text-white mt-4 text-sm">Return Policy</p>
          </div>
          <div className="pl-28">
            <h1 className="text-white text-lg font-Clash Display">Join our mailing list</h1>
            <input type="text" placeholder="you@gmail.com" className="bg-slate-50 w-80 mt-5 h-12 p-5" />
            <button className="bg-slate-200 h-12 w-32 mt-1">Sign Up</button>
          </div>
        </div>
        <div className="border-t-2 m-auto w-11/12 my-8">
          <div className="flex flex-wrap justify-between items-center text-white gap-4 pt-2">
            <div>
              <h1>Copyright 2022 Avion LTD</h1>
            </div>
            <div className="flex gap-4">
              <Link href="/"><FaLinkedin size={20} /></Link>
              <Link href="/"><FaFacebookSquare size={20} /></Link>
              <Link href="/"><FaInstagram size={20} /></Link>
              <Link href="/"><IoLogoSkype size={20} /></Link>
              <Link href="/"><FaTwitter size={20} /></Link>
              <Link href="/"><FaPinterest size={20} /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;