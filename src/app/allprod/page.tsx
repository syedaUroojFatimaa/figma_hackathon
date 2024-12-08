import React from 'react'
import Link from "next/link";
import Image from "next/image"
import { VscTriangleDown } from "react-icons/vsc";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";

export default function page() {
  return (
    <div>
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

<div>
    <Image src="/img/bg.jpg"
    alt="bg"
    width={1380}
    height={300}
    className='pt-4'/>
</div>

<div className="flex">
  <button className="ml-14 text-lg font-normal pt-4 flex items-center gap-3">
    Category
    <VscTriangleDown />
  </button> 

  <button className="ml-14 text-lg font-normal pt-4 flex items-center gap-3">
    Product Type
    <VscTriangleDown />
  </button>

  <button className="ml-14 text-lg font-normal pt-4 flex items-center gap-3">
    Price
    <VscTriangleDown />
  </button>

  <button className="ml-14 text-lg font-normal pt-4 flex items-center gap-3">
    Brand
    <VscTriangleDown />
  </button>

  <h1 className='ml-96 text-lg font-normal pt-4 flex items-center'>Sorting By :</h1>
  <button className="ml-14 text-lg font-normal pt-4 flex items-center gap-3">
    Date Added
    <VscTriangleDown />
  </button>

  
</div>
<div> 
         <div className="flex gap-6 px-16 pt-10">
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
            className=""
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
            className=""
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
            className=""
          />
          </Link>
          <p className="mt-3 text-lg font-normal">The Lucy Lamp</p>
          <p className="">£399</p>
        </div>
      </div>
      <div className="flex gap-6 px-16 pt-10">
        {/* Card 1 */}
        <div className="">
          <Link href="./Productlisting">
          <Image
            src="/img/p1.jpg"
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
            src="/img/p3.jpg"
            alt="Stone"
            width={300}
            height={350}
            className=""
          />
          </Link>
          <p className="mt-3 text-lg font-normal">Rustic Vase Set</p>
          <p className="">£155</p>
        </div>

        {/* Card 3 */}
        <div className="">
        <Link href="./Productlisting">
          <Image
            src="/img/p33.jpg"
            alt="Bottle"
            width={300}
            height={350}
            className=""
          />
          </Link>
          <p className="mt-3 text-lg font-normal">The Silky Vase</p>
          <p className="">£125</p>
        </div>

        {/* Card 4 */}
        <div className="">
        <Link href="./Productlisting">
          <Image
            src="/img/p4.jpg"
            alt="Lamp"
            width={300}
            height={350}
            className=""
          />
          </Link>
          <p className="mt-3 text-lg font-normal">The Lucy Lamp</p>
          <p className="">£399</p>
        </div>
      </div>
      <div className="flex gap-6 px-16 pt-10 mb-4">
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
            className=""
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
            className=""
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
            className=""
          />
          </Link>
          <p className="mt-3 text-lg font-normal">The Lucy Lamp</p>
          <p className="">£399</p>
        </div>
      </div>
      </div>
      <div className="h-96 bg-violet-950 ">
      <div className="flex space-x-8 pt-10 pl-20 font-normal">
        <div>
          <h1 className="text-white text-lg  font-Clash Display">Menu</h1>
          <p className="text-white mt-4 text-sm">New arrivals</p>
          <p className="text-white mt-4 text-sm">Best seller</p>
          <p className="text-white mt-4 text-sm">Recently Viewed</p>
          <p className="text-white mt-4 text-sm">Popular this week</p>
          <p className="text-white mt-4 text-sm">All Products</p>
        </div>
        <div>
          <h1 className="text-white text-lg font-normal Display ml-20">
            Catergory
          </h1>
          <p className="text-white mt-4 text-sm ml-20">Crockery</p>
          <p className="text-white mt-4 text-sm ml-20">Furniture</p>
          <p className="text-white mt-4 text-sm ml-20">Homeware</p>
          <p className="text-white mt-4 text-sm ml-20">Plants pot</p>
          <p className="text-white mt-4 text-sm ml-20">Chiar</p>
          <p className="text-white mt-4 text-sm ml-20">Crockery</p>
        </div>
        <div className="pl-28">
          <h1 className="text-white text-lg font-normal Display">Our Company</h1>
          <Link href="./aboutus" className="text-white mt-4 text-sm ">About Us</Link>
          <p className="text-white mt-4 text-sm ">Vacancies</p>
          <p className="text-white mt-4 text-sm ">Contact Us</p>
          <p className="text-white mt-4 text-sm ">Privacy</p>
          <p className="text-white mt-4 text-sm ">Return Policy</p>
        </div>
        <div className="pl-28">
          <h1 className="text-white text-lg font-Clash Display">
            Join our mailing list
          </h1>
          <input
            type="text"
            placeholder="you@gmail.com"
            className="bg-slate-50 w-80 mt-5 h-12 p-5 "
          />
          <button className="bg-slate-200 h-12 w-32  mt-1">
            Sign Up
          </button>
        </div>
      </div>
      <div className="border-t-2 m-auto w-11/12 my-8"> 
      
      <div className='flex flex-wrap justify-between items-center text-white gap-4 pt-2'>
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
    </div>
  )
}
