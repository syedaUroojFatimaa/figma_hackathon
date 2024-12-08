import React from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest, FaCreditCard, FaLeaf } from "react-icons/fa";
import { IoIosCheckmarkCircleOutline, IoLogoSkype } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePriceChange } from "react-icons/md";
import { LuSprout } from "react-icons/lu";
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <div className='bg-white'>
        <div className='bg-violet-950 w-full h-12 flex items-center justify-center'>
          <TbTruckDelivery className="text-gray-100 text-xl" />
          <p className='text-gray-300 ml-2'>Free delivery on all orders over £50 with code easter checkout</p>
        </div>
        <header className="bg-white">
          <div className="container mx-auto px-4 flex items-center justify-between py-4">
            <h1 className="text-3xl font-normal">Avion</h1>
            <div className="flex items-center space-x-4">
              <Link href="#" className='font-normal'>About Us</Link>
              <Link href="/contact" className='font-normal'>Contact</Link>
              <Link href="/blog" className='font-normal'>Blog</Link>
              <FaSearch className="text-gray-600 hover:text-gray-900 cursor-pointer" size={20} />
              <FaShoppingCart className="text-gray-600 hover:text-gray-900 cursor-pointer" size={20} />
              <FaUser className="text-gray-600 hover:text-gray-900 cursor-pointer" size={20} />
            </div>
          </div>
        </header>
      </div>

      <div className="bg-gray-50">
        <div className="hidden md:flex space-x-8 ml-96 py-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">All Products</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Plant pots</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Ceramics</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Tables</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Chairs</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Crockery</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Tableware</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Cutlery</a>
        </div>
      </div>

      {/* Mobile Version Start */}
      <div className="md:hidden">
        <div className="text-center pt-10">
          <h1 className="text-4xl font-normal text-gray-950">A brand built on the love of craftsmanship, quality, and outstanding customer service</h1>
          <Link href="/allprod">
            <button className="bg-gray-50 text-black py-4 px-8 mt-4">View Products</button>
          </Link>
        </div>

        <div className="bg-violet-950 mt-20 p-6">
          <h1 className="text-2xl text-white">It started with a small idea</h1>
          <p className='text-white mt-4'>A global brand with local beginnings, our story began in a small studio in South London in early 2014.</p>
          <Link href="/allprod">
            <button className="bg-violet-400 text-white py-3 px-6 mt-4">View Collection</button>
          </Link>
        </div>

        <div className="pt-10">
          <Image src="/img/Image Block.png" alt="block img" width={500} height={800} />
        </div>

        <div className="bg-gray-50 py-8">
          <h1 className="text-2xl text-center text-gray-900">Our service isn’t just personal, it’s hyper personally exquisite</h1>
          <p className="text-center mt-6 text-lg">When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.</p>
          <button className="bg-white mt-8 py-3 px-6 text-gray-700 hover:bg-slate-300 block mx-auto">Get in Touch</button>
        </div>
        <section className='bg-white'>
          <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
            {/* Title */}
            <h1 className="text-center text-xl md:text-2xl font-semibold">
              What makes our brand different
            </h1>

            {/* Features */}
            <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg">
              {/* Feature 1 */}
              <div className="flex flex-col md:w-[25%] p-4 rounded-lg">
                <TbTruckDelivery size={35} className="text-[#2A254B]" />
                <p className="py-4 font-normal text-2xl">Next day as standard</p>
                <p>Order before 3pm and get your order the next day as standard.</p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col md:w-[25%] p-4 rounded-lg">
                <IoIosCheckmarkCircleOutline size={35} className="text-[#2A254B]" />
                <p className="py-4 font-normal text-2xl">Made by true artisans</p>
                <p>Hand-crafted goods made with real passion and craftsmanship.</p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col md:w-[25%] p-4 rounded-lg">
                <MdOutlinePriceChange size={35} className="text-[#2A254B]" />
                <p className="py-4 font-normal text-2xl">Unbeatable prices</p>
                <p>For our material and quality, you won't find better prices anywhere.</p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col md:w-[25%] p-4 rounded-lg">
                <LuSprout size={35} className="text-[#2A254B]" />
                <p className="py-4 font-normal text-2xl">Recycled packaging</p>
                <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center pt-12">
          <div className="bg-white rounded shadow-md p-8">
            <h1 className="text-3xl font-normal text-gray-800 mb-8">Join the club and get the benefits</h1>
            <p className="text-gray-600 text-lg mb-6">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.</p>
            <form className="flex items-center justify-center mb-4">
              <input type="email" placeholder="your@email.com" className="w-full max-w-md px-4 py-4 border border-gray-300" required />
              <button type="submit" className="px-6 py-4 bg-gray-950 mr-7 text-white hover:bg-gray-700">Sign up</button>
            </form>
          </div>
        </div>

        <div className="bg-violet-950 py-10 mt-12">
          <div className="flex flex-col items-center text-white space-y-4">
            <h1 className="text-lg">Menu</h1>
            <p className="text-sm">New arrivals</p>
            <p className="text-sm">Best seller</p>
            <p className="text-sm">Recently Viewed</p>
            <p className="text-sm">Popular this week</p>
            <p className="text-sm">All Products</p>
          </div>

          <div className="flex flex-col items-center text-white space-y-4 mt-8">
            <h1 className="text-lg">Category</h1>
            <p className="text-sm">Crockery</p>
            <p className="text-sm">Furniture</p>
            <p className="text-sm">Homeware</p>
            <p className="text-sm">Plants pot</p>
            <p className="text-sm">Chairs</p>
          </div>

          <div className="flex flex-col items-center text-white space-y-4 mt-8">
            <h1 className="text-lg">Our Company</h1>
            <Link href="/pages/aboutus" className="text-sm">About Us</Link>
            <p className="text-sm">Vacancies</p>
            <p className="text-sm">Contact Us</p>
            <p className="text-sm">Privacy</p>
            <p className="text-sm">Return Policy</p>
          </div>

          <div className="text-center mt-12">
            <h1 className="text-lg">Join our mailing list</h1>
            <input type="text" placeholder="you@gmail.com" className="bg-slate-50 w-80 mt-5 h-12 p-5" />
            <button className="bg-slate-200 h-12 w-32 mt-2">Sign Up</button>
          </div>

          <div className="border-t-2 mt-8 pt-4">
            <div className="flex justify-between items-center text-white gap-4">
              <div>Copyright 2022 Avion LTD</div>
              <div className="flex gap-4">
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
      {/* Mobile Version End */}
    </div>
  );
}