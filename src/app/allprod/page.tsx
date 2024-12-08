import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { VscTriangleDown } from 'react-icons/vsc';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from 'react-icons/fa';
import { IoLogoSkype } from 'react-icons/io';

export default function HomePage() {
  return (
    <div>
      <div className="bg-white">
        <header className="bg-white">
          <div className="container mx-auto px-4 flex items-center justify-between py-4 flex-col md:flex-row">
            <FaSearch className="text-gray-600 hover:text-gray-900 cursor-pointer" size={20} />
            <h1 className="text-3xl font-normal text-center">Avion</h1>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link href="./cart">
                <FaShoppingCart className="text-gray-600 hover:text-gray-900 cursor-pointer" size={20} />
              </Link>
              <FaUser className="text-gray-600 hover:text-gray-900 cursor-pointer" size={20} />
            </div>
          </div>
        </header>

        <hr className="border-t border-gray-300 my-1 ml-6 mr-6" />

        <div className="hidden md:flex space-x-8 ml-96 pt-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">Plant pots</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Ceramics</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Tables</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Chairs</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Crockery</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Tableware</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Cutlery</a>
        </div>
      </div>

      <div>
        <Image src="/img/bg.jpg" alt="bg" width={1380} height={300} className="pt-4" />
      </div>

      <div className="flex flex-wrap justify-start gap-4 md:gap-6 pt-10">
        <button className="ml-4 md:ml-14 text-lg font-normal pt-4 flex items-center gap-3">
          Category
          <VscTriangleDown />
        </button>
        <button className="ml-4 md:ml-14 text-lg font-normal pt-4 flex items-center gap-3">
          Product Type
          <VscTriangleDown />
        </button>
        <button className="ml-4 md:ml-14 text-lg font-normal pt-4 flex items-center gap-3">
          Price
          <VscTriangleDown />
        </button>
        <button className="ml-4 md:ml-14 text-lg font-normal pt-4 flex items-center gap-3">
          Brand
          <VscTriangleDown />
        </button>

        <h1 className="ml-0 md:ml-96 text-lg font-normal pt-4 flex items-center">Sorting By :</h1>
        <button className="ml-4 md:ml-14 text-lg font-normal pt-4 flex items-center gap-3">
          Date Added
          <VscTriangleDown />
        </button>
      </div>

      <div>
      <div className="flex gap-6 px-16 pt-10 flex-wrap md:flex-nowrap">
        {/* Card 1 */}
        <div className="">
          <Link href="./Productlisting">
            <Image
              src="/img/chair1.jpg"
              alt="Chair"
              width={300}
              height={350}
            />
          </Link>
          <p className="mt-3 text-lg font-normal">The Dandy Chair</p>
          <p className="">£250</p>
        </div>

        {/* Card 2 */}
        <div className="">
          <Link href="./Productlisting">
            <Image
              src="/img/stone.jpg"
              alt="Stone"
              width={300}
              height={350}
            />
          </Link>
          <p className="mt-3 text-lg font-normal">Rustic Vase Set</p>
          <p className="">£155</p>
        </div>

        {/* Card 3 */}
        <div className="">
          <Link href="./Productlisting">
            <Image
              src="/img/bottle.jpg"
              alt="Bottle"
              width={300}
              height={350}
            />
          </Link>
          <p className="mt-3 text-lg font-normal">The Silky Vase</p>
          <p className="">£125</p>
        </div>

        {/* Card 4 */}
        <div className="">
          <Link href="./Productlisting">
            <Image
              src="/img/bulb.jpg"
              alt="Lamp"
              width={300}
              height={350}
            />
          </Link>
          <p className="mt-3 text-lg font-normal">The Lucy Lamp</p>
          <p className="">£399</p>
        </div>
      </div>

      <div className="flex gap-6 px-16 pt-10 flex-wrap md:flex-nowrap">
          {/* Card 1 */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <Link href="./Productlisting">
              <Image src="/img/p1.jpg" alt="Chair" width={300} height={350} />
            </Link>
            <p className="mt-3 text-lg font-normal">The Dandy Chair</p>
            <p className="">£250</p>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <Link href="./Productlisting">
              <Image src="/img/p3.jpg" alt="Stone" width={300} height={350} />
            </Link>
            <p className="mt-3 text-lg font-normal">Rustic Vase Set</p>
            <p className="">£155</p>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <Link href="./Productlisting">
              <Image src="/img/p33.jpg" alt="Bottle" width={300} height={350} />
            </Link>
            <p className="mt-3 text-lg font-normal">The Silky Vase</p>
            <p className="">£125</p>
          </div>

          {/* Card 4 */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <Link href="./Productlisting">
              <Image src="/img/p4.jpg" alt="Lamp" width={300} height={350} />
            </Link>
            <p className="mt-3 text-lg font-normal">The Lucy Lamp</p>
            <p className="">£399</p>
          </div>
        </div>

        <div className="flex gap-6 px-16 pt-10 flex-wrap md:flex-nowrap">
        {/* Card 1 */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <Link href="./Productlisting">
              <Image src="/img/chair1.jpg" alt="Chair" width={300} height={350} />
            </Link>
            <p className="mt-3 text-lg font-normal">The Dandy Chair</p>
            <p className="">£250</p>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <Link href="./Productlisting">
              <Image src="/img/stone.jpg" alt="Stone" width={300} height={350} />
            </Link>
            <p className="mt-3 text-lg font-normal">Rustic Vase Set</p>
            <p className="">£155</p>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <Link href="./Productlisting">
              <Image src="/img/bottle.jpg" alt="Bottle" width={300} height={350} />
            </Link>
            <p className="mt-3 text-lg font-normal">The Silky Vase</p>
            <p className="">£125</p>
          </div>

          {/* Card 4 */}
          <div className="w-full sm:w-1/2 md:w-1/4">
            <Link href="./Productlisting">
              <Image src="/img/bulb.jpg" alt="Lamp" width={300} height={350} />
            </Link>
            <p className="mt-3 text-lg font-normal">The Lucy Lamp</p>
            <p className="">£399</p>
          </div>
        </div>
      </div>
    <div className="bg-violet-950 text-white pt-10">
      <div className="container mx-auto flex flex-wrap justify-between gap-8 px-4 md:px-20 font-normal">
        {/* Menu Section */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h1 className="text-lg font-semibold">Menu</h1>
          <p className="mt-4 text-sm">New arrivals</p>
          <p className="mt-4 text-sm">Best seller</p>
          <p className="mt-4 text-sm">Recently Viewed</p>
          <p className="mt-4 text-sm">Popular this week</p>
          <p className="mt-4 text-sm">All Products</p>
        </div>
        
        {/* Category Section */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h1 className="text-lg font-semibold">Category</h1>
          <p className="mt-4 text-sm">Crockery</p>
          <p className="mt-4 text-sm">Furniture</p>
          <p className="mt-4 text-sm">Homeware</p>
          <p className="mt-4 text-sm">Plant pots</p>
          <p className="mt-4 text-sm">Chair</p>
          <p className="mt-4 text-sm">Crockery</p>
        </div>

        {/* Our Company Section */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h1 className="text-lg font-semibold">Our Company</h1>
          <Link href="./aboutus"
           className="text-sm mt-4">About Us
          </Link>
          <p className="text-sm mt-4">Vacancies</p>
          <p className="text-sm mt-4">Contact Us</p>
          <p className="text-sm mt-4">Privacy</p>
          <p className="text-sm mt-4">Return Policy</p>
        </div>

        {/* Newsletter Section */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h1 className="text-lg font-semibold">Join our mailing list</h1>
          <input
            type="text"
            placeholder="you@gmail.com"
            className="bg-slate-50 w-full md:w-80 mt-5 h-12 p-5 rounded-md"
          />
          <button className="bg-slate-200 h-12 w-full md:w-32 mt-2 rounded-md">
            Sign Up
          </button>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="border-t-2 m-auto w-11/12 my-8">
        <div className="flex flex-wrap justify-between items-center text-white gap-4 pt-2">
          <div>
            <h1 className="text-sm">Copyright 2022 Avion LTD</h1>
          </div>
          <div className="flex gap-4">
            <Link href={'/'}>
              <FaLinkedin size={20} />
            </Link>
            <Link href={'/'}>
              <FaFacebookSquare size={20} />
            </Link>
            <Link href={'/'}>
              <FaInstagram size={20} />
            </Link>
            <Link href={'/'}>
              <IoLogoSkype size={20} />
            </Link>
            <Link href={'/'}>
              <FaTwitter size={20} />
            </Link>
            <Link href={'/'}>
              <FaPinterest size={20} />
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}