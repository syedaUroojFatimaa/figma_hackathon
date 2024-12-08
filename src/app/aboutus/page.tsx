import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { VscPass } from "react-icons/vsc";
import { FaCreditCard } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa6";
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";
import Image from 'next/image';
export default function page() {
  return (
    <div>
      <div className='bg-white'>
      <div className='bg-violet-950 w-full h-12 flex items-center justify-center'>
        <FaTruckFast className="text-gray-100 text-xl" />
        <p className='text-gray-300  ml-2'>Free delivery on all orders over £50 with code easter checkout</p>
      </div>
      <header className="bg-white">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">


          <h1 className="text-3xl font-normal">Avion</h1>

          <div className="flex items-center space-x-4">
            <Link href="#" className=' font-normal'>About Us</Link>
            <Link href="" className=' font-normal'>Contact</Link>
            <Link href="" className=' font-normal'>Blog</Link>
            <FaSearch
              className="text-gray-600 hover:text-gray-900 cursor-pointer"
              size={20}
            />
              <FaShoppingCart
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                size={20}
              />
              <FaUser
                className="text-gray-600 hover:text-gray-900 cursor-pointer"
                size={20}
              />
            </div>
        </div>
      </header>
    </div>
    <div className="bg-gray-50 ">
    <div className="hidden md:flex space-x-8 ml-96 py-6">
    <a href="#" className="text-gray-600 hover:text-gray-900">
          All Products
        </a>
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
    <div className="relative">
  <h1 className="text-4xl font-normal text-gray-950 ml-14 pt-16">
    A brand built on the love of craftmanship,
  </h1>
  <p className="text-4xl font-normal text-gray-950 ml-14 pt-1">
    quality and outstanding customer service
  </p>
  <Link href="./allprod">
  <button className="absolute top-0 right-0 mt-20 mr-40 bg-gray-50 text-black py-4 px-8">
    View Products
  </button>
  </Link>
</div>

<div className="flex gap-8">
<div className='bg-violet-950 mt-20 ml-32 w-[550px] h-[380px]'>
<h1 className="text-4xl text-white ml-16 pt-16">It started with a small idea
</h1>
<p className='text-white text-base ml-16 mt-5'>A global brand with local beginnings, our story begain in a 
</p>
<p className='text-white text-base ml-16'>small studio in South London in early 2014
</p>
<div className="ml-16 pt-36">
<Link href="./allprod">
            <button className="bg-violet-400 text-white py-3 px-6">
              View Collection
            </button>
            </Link>

          </div>
</div>
<div className='pt-20'>
  <Image src="/img/Image Block.png" alt="block img" width={500} height={800}/>
  </div>
</div>

<div className="pt-14 flex">
  <div>
    <Image
    src="/img/bfSofa.jpg"
    alt="bg"
    width={750}
    height={700} />
  </div>
      <div className="bg-gray-50 h-[590px] w-[700px] text-gray-900 font-normal pt-16  ">
        <h1 className='text-2xl ml-16'>Our service isn’t just personal, it’s actually
        </h1>
        <h1 className='text-2xl ml-16'>hyper personally exquisite
        </h1>
        <p className='ml-16 pt-6'>When we started Avion, the idea was simple. Make high quality furniture 
        </p>
        <p className='ml-16'>affordable and available for the mass market. </p>
        <p className='ml-16 pt-6'>Handmade, and lovingly crafted furniture and homeware is what we live, 
        </p>
        <p className='ml-16'>breathe and design so our Chelsea boutique become the hotbed for the 
        </p>
        <p className='ml-16'>London interior design community.
        </p>
        <button className="bg-white ml-16 mt-52 py-3 px-6 text-gray-700 hover:bg-slate-300 ">Get in Touch</button>

</div>
</div>

<div className="text-center pt-16 bg-white mb-4">
      <div className="text-2xl font-semibold mb-8">What Makes Our Brand Different</div>
      <div className="flex">
        <FaTruckFast className="text-4xl text-gray-700 ml-20" />
        <VscPass className="text-4xl text-gray-700 ml-72" />
        <FaCreditCard className="text-4xl text-gray-700 ml-72" />
        <FaLeaf className="text-4xl text-gray-700 ml-72" />
      </div>
      <div  className="flex">
        <h1 className="ml-20 pt-2 text-xl font-normal">Next day as standard</h1>
        <h1 className="ml-36 pt-2 text-xl font-normal">Made by true artisans</h1>
        <h1 className="ml-32 pt-2 text-xl font-normal">Unbeatable price</h1>
        <h1 className="ml-40 pt-2 text-xl font-normal">Recycled packaging</h1>
      </div>

      <div  className="flex">
        <p className="ml-20 text-lg pt-2">Order before 3pm and get your </p>
        <p className="ml-20 text-lg pt-2">Handmade crafted goods made </p>
        <p className="ml-16 text-lg pt-2">For our materials and quality </p>
        <p className="ml-20 text-lg pt-2">We use 100% recycled packaging</p>
      </div>

      <div  className="flex">
        <p className="ml-20 text-lg">order the next day as</p>
        <p className="ml-40 text-lg">with real passion and</p>
        <p className="ml-36 text-lg gap-1">you won’t find better prices</p>
        <p className="ml-24 text-lg">ensure our footprint is</p>
      </div>

      <div  className="flex">
        <p className="ml-20 text-lg">standard</p>
        <p className="ml-64 text-lg">craftmanship</p>
        <p className="ml-56 text-lg">anywhere</p>
        <p className="ml-56 text-lg">manageable</p>
      </div>
    </div>

    <div className="flex justify-center items-center pt-12 bg-gray-50">
        <div className="bg-white rounded shadow-md p-8 h-full w-[1100px] text-center">
          <h1 className="text-3xl font-normal text-gray-800 mb-8">
            Join the club and get the benefits
          </h1>
          <p className="text-gray-600 font-normal text-lg mb-0">
            Sign up for our newsletter and receive exclusive offers on new
          </p>
          <p className="text-gray-600 font-normal text-lg mb-6">
          ranges,
          sales, pop-up stores, and more.
          </p>
          <form className="flex items-center justify-center mb-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full max-w-md px-4 py-4 border border-gray-300 "
              required
            />
            <button
              type="submit"
              className="px-6 py-4 bg-gray-950 mr-7 text-white hover:bg-gray-700 transition duration-300"
            >
              Sign up
            </button>
          </form>

        </div>
      </div>
<div className="pt-12">      
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
          <Link href="./pages/aboutus" className="text-white mt-4 text-sm ">About Us</Link>
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
    </div>
  )
}
