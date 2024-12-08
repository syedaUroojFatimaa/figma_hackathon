import React from "react";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";

const Footer = () => {
  return (
    <div className="h-96 bg-violet-950">
      <div className="flex space-x-8 pt-10 pl-20 font-normal sm:flex-col md:flex-row">
        <div className="sm:w-full">
          <h1 className="text-white text-lg font-Clash Display">Menu</h1>
          <p className="text-white mt-4 text-sm">New arrivals</p>
          <p className="text-white mt-4 text-sm">Best seller</p>
          <p className="text-white mt-4 text-sm">Recently Viewed</p>
          <p className="text-white mt-4 text-sm">Popular this week</p>
          <p className="text-white mt-4 text-sm">All Products</p>
        </div>
        <div className="sm:w-full mt-6 sm:mt-0">
          <h1 className="text-white text-lg font-normal Display ml-20">Category</h1>
          <p className="text-white mt-4 text-sm ml-20">Crockery</p>
          <p className="text-white mt-4 text-sm ml-20">Furniture</p>
          <p className="text-white mt-4 text-sm ml-20">Homeware</p>
          <p className="text-white mt-4 text-sm ml-20">Plant pot</p>
          <p className="text-white mt-4 text-sm ml-20">Chair</p>
          <p className="text-white mt-4 text-sm ml-20">Crockery</p>
        </div>
        <div className="sm:w-full mt-6 sm:mt-0">
          <h1 className="text-white text-lg font-normal Display ml-20">Our Company</h1>
          <Link href="./aboutus" className="text-white mt-4 text-sm">About Us</Link>
          <p className="text-white mt-4 text-sm">Vacancies</p>
          <p className="text-white mt-4 text-sm">Contact Us</p>
          <p className="text-white mt-4 text-sm">Privacy</p>
          <p className="text-white mt-4 text-sm">Return Policy</p>
        </div>
        <div className="sm:w-full mt-6 sm:mt-0">
          <h1 className="text-white text-lg font-Clash Display ml-12">Join our mailing list</h1>
          <input
            type="text"
            placeholder="you@gmail.com"
            className="bg-slate-50 w-full sm:w-80 mt-5 h-12 p-5"
          />
          <button className="bg-slate-200 h-12 w-full sm:w-32 mt-1">Sign Up</button>
        </div>
      </div>

      <div className="border-t-2 m-auto w-11/12 my-8">
        <div className="flex flex-wrap justify-between items-center text-white gap-4 pt-2">
          <div>
            <h1>Copyright 2022 Avion LTD</h1>
          </div>
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
  );
};

export default Footer;