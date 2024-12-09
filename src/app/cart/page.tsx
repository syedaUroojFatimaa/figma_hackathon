
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


      <div className='px-6 md:px-12 py-8 bg-[#2A254B] mt-8'>
        <div className="flex flex-wrap gap-12 md:gap-[100px] lg:gap-[200px]">
          {/* Menu Section */}
          <div className="text-gray-500 w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Menu</h1>
            <div className='space-y-2'>
              <h1><Link href={'/'}>New Arrivals</Link></h1>
              <h1><Link href={'/'}>Best sellers</Link></h1>
              <h1><Link href={'/'}>Recently viewed</Link></h1>
              <h1><Link href={'/'}>Popular this week</Link></h1>
              <h1><Link href={'/'}>All Products</Link></h1>
            </div>
          </div>

          {/* Categories Section */}
          <div className="text-gray-500 w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Categories</h1>
            <div className='space-y-2'>
              <h1><Link href={'/'}>Crockery</Link></h1>
              <h1><Link href={'/'}>Furniture</Link></h1>
              <h1><Link href={'/'}>Homeware</Link></h1>
              <h1><Link href={'/'}>Plant pots</Link></h1>
              <h1><Link href={'/'}>Chairs</Link></h1>
            </div>
          </div>

          {/* Company Section */}
          <div className="text-gray-500 w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Our Company</h1>
            <div className='space-y-2'>
              <h1><Link href='/about'>About us</Link></h1>
              <h1><Link href={'/'}>Vacancies</Link></h1>
              <h1><Link href={'/'}>Contact us</Link></h1>
              <h1><Link href={'/'}>Privacy</Link></h1>
              <h1><Link href={'/'}>Return policy</Link></h1>
            </div>
          </div>

          {/* Mailing List Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Join our mailing list</h1>
            <div className='mt-4'>
              <input
                type="text"
                placeholder="your@email.com"
                className='w-full sm:w-[250px] lg:w-[300px] h-[48px] p-2 bg-transparent opacity-35 border border-white rounded-md'
              />
              <button className='mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md'>
                Sign up
              </button>
            </div>
          </div>
        </div>

        <hr className='bg-[#4E4D93] my-8' />

        {/* Footer Bottom Section */}
        <div className='flex flex-wrap justify-between items-center text-white gap-4'>
          <div>
            <h1>Copyright 2022 Avion LTD</h1>
          </div>
          <div className='flex gap-4'>
            <Link href={'/'}><FaLinkedin size={20} /></Link>
            <Link href={'/'}><FaFacebookSquare size={20} /></Link>
            <Link href={'/'}><FaInstagram size={20} /></Link>
            <Link href={'/'}><IoLogoSkype size={20} /></Link>
            <Link href={'/'}><FaTwitter size={20} /></Link>
            <Link href={'/'}><FaPinterest size={20} /></Link>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default Cart;