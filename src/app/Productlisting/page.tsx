/*import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { IoLogoSkype } from "react-icons/io";
import { TbTruckDelivery } from 'react-icons/tb';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";
const Productlisting =() => {
  return (
    <div>
    <div className='bg-violet-950 w-full h-12 flex items-center justify-center'>
        <FaTruckFast className="text-gray-100 text-xl" />
        <p className='text-gray-300  ml-2'>Free delivery on all orders over £50 with code easter checkout</p>
      </div>
      <header className="bg-white">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">


          <h1 className="text-3xl font-normal">Avion</h1>

          <div className="flex items-center space-x-4">
            <Link href="#" className=' font-normal'>Home</Link>
            <Link href="#" className=' font-normal'>Contact</Link>
            <Link href="#" className=' font-normal'>Blog</Link>
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
      <hr className="border-t border-gray-300 my-1 ml-6 mr-6" />
      <section>
        <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 h-auto">
              <Image
                src={'/img/Image Left.png'}
                height={800}
                width={800}
                alt="chair"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center">
              <div>
                <p className="text-xl md:text-2xl font-semibold">The Dandy Chair</p>
                <p className="py-2 text-lg md:text-xl">$250</p>
              </div>
              <div className="text-[#505977] text-sm md:text-base">
                <h1 className="font-semibold">Description</h1>
                <div className="my-4 md:my-6">
                  <p>
                    A timeless design, with premium materials features as one of our most popular
                    and iconic pieces. The dandy chair is perfect for any stylish living space with
                    beech legs and lambskin leather upholstery.
                  </p>
                </div>
                <div className="ml-4">
                  <ul className="list-disc space-y-1">
                    <li>Premium material</li>
                    <li>Handmade upholstery</li>
                    <li>Quality timeless classic</li>
                  </ul>
                </div>
                <div>
                  <div className="my-8">
                    <h1 className="font-semibold">Dimensions</h1>
                  </div>
                  <div className="flex gap-12 md:gap-20 text-sm md:text-base">
                    <div>
                      <h1>Height</h1>
                      <p>110cm</p>
                    </div>
                    <div>
                      <h1>Width</h1>
                      <p>75cm</p>
                    </div>
                    <div>
                      <h1>Depth</h1>
                      <p>50cm</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-center mt-8">
                    <div className="flex items-center gap-4">
                      <h1>Amount:</h1>
                      <button className="flex gap-4 bg-[#F5F5F5] rounded-md px-4 py-2">
                        <span>+</span> 1 <span>-</span>
                      </button>
                    </div>
                    <button className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-6 px-16 pt-10 flex-wrap md:flex-nowrap">
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


          <div className="my-10 flex justify-center">
            <Link href="./allprod">
            <button className="bg-[#F9F9F9] py-3 px-6 rounded-md text-[#2A254B]">
              View collection
            </button>
            </Link>
          </div>

          <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
          <h1 className="text-center text-xl md:text-2xl font-semibold">
            What makes our brand different
          </h1>

          <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg">
            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
              <TbTruckDelivery size={35} className="text-[#2A254B]" />
              <p className="py-4 font-normal text-2xl">Next day as standard</p>
              <p>Order before 3pm and get your order the next day as standard.</p>
            </div>

            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <IoIosCheckmarkCircleOutline  size={35} className="text-[#2A254B]"/>
              <p className="py-4 font-normal text-2xl">Made by true artisans</p>
              <p>Hand-crafted goods made with real passion and craftsmanship.</p>
            </div>

            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <MdOutlinePriceChange size={35} className="text-[#2A254B]"/>
              <p className="py-4 font-normal text-2xl">Unbeatable prices</p>
              <p>For our material and quality, you won&apos;t find better prices anywhere.</p>
            </div>

            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <LuSprout size={35} className="text-[#2A254B]"/>
              <p className="py-4 font-normal text-2xl">Recycled packaging</p>
              <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
            </div>
          </div>
        </div>

        <div className='px-6 md:px-12 py-8 bg-[#2A254B] mt-8'>
        <div className="flex flex-wrap gap-12 md:gap-[100px] lg:gap-[200px]">
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
      </section>
      </div>
  );
};

export default Productlisting;*/
"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { IoLogoSkype } from "react-icons/io";
import { TbTruckDelivery } from 'react-icons/tb';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import { MdOutlinePriceChange } from "react-icons/md";

const Productlisting = () => {
   const [quantity, setQuantity] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Reset quantity when the component is unmounted or `isVisible` is set to false
    return () => setQuantity(1);
  }, [isVisible]);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };


  return (
    <div>
      <div className='bg-violet-950 w-full h-12 flex items-center justify-center'>
        <FaTruckFast className="text-gray-100 text-xl" />
        <p className='text-gray-300  ml-2'>Free delivery on all orders over £50 with code easter checkout</p>
      </div>
      <header className="bg-white">
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          <h1 className="text-3xl font-normal">Avion</h1>
          <div className="flex items-center space-x-4">
            <Link href="#" className=' font-normal'>Home</Link>
            <Link href="#" className=' font-normal'>Contact</Link>
            <Link href="#" className=' font-normal'>Blog</Link>
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
      <hr className="border-t border-gray-300 my-1 ml-6 mr-6" />
      <section>
        <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
          {/* Main Product Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 h-auto">
              <Image
                src={'/img/Image Left.png'}
                height={800}
                width={800}
                alt="chair"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 md:px-10 py-6 flex flex-col justify-center">
              <div>
                <p className="text-xl md:text-2xl font-semibold">The Dandy Chair</p>
                <p className="py-2 text-lg md:text-xl">$250</p>
              </div>
              <div className="text-[#505977] text-sm md:text-base">
                <h1 className="font-semibold">Description</h1>
                <div className="my-4 md:my-6">
                  <p>
                    A timeless design, with premium materials features as one of our most popular
                    and iconic pieces. The dandy chair is perfect for any stylish living space with
                    beech legs and lambskin leather upholstery.
                  </p>
                </div>
                <div className="ml-4">
                  <ul className="list-disc space-y-1">
                    <li>Premium material</li>
                    <li>Handmade upholstery</li>
                    <li>Quality timeless classic</li>
                  </ul>
                </div>
                <div>
                  <div className="my-8">
                    <h1 className="font-semibold">Dimensions</h1>
                  </div>
                  <div className="flex gap-12 md:gap-20 text-sm md:text-base">
                    <div>
                      <h1>Height</h1>
                      <p>110cm</p>
                    </div>
                    <div>
                      <h1>Width</h1>
                      <p>75cm</p>
                    </div>
                    <div>
                      <h1>Depth</h1>
                      <p>50cm</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-center mt-8">
                    <div className="flex items-center gap-4">
                      <h1>Amount:</h1>
                      <div className="flex items-center gap-4 bg-[#F5F5F5] rounded-md px-4 py-2">
                        <button
                          className="text-xl font-bold"
                          onClick={decreaseQuantity}
                          disabled={quantity <= 1}
                        >
                          -
                        </button>
                        <span>{quantity}</span>
                        <button
                          className="text-xl font-bold"
                          onClick={increaseQuantity}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 px-16 pt-10 flex-wrap md:flex-nowrap">
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


          <div className="my-10 flex justify-center">
            <Link href="./allprod">
            <button className="bg-[#F9F9F9] py-3 px-6 rounded-md text-[#2A254B]">
              View collection
            </button>
            </Link>
          </div>

          <div className="px-4 md:px-8 py-12 text-[#2A254B] mt-12">
          <h1 className="text-center text-xl md:text-2xl font-semibold">
            What makes our brand different
          </h1>

          <div className="flex flex-col md:flex-row gap-8 mt-12 text-base md:text-lg">
            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
              <TbTruckDelivery size={35} className="text-[#2A254B]" />
              <p className="py-4 font-normal text-2xl">Next day as standard</p>
              <p>Order before 3pm and get your order the next day as standard.</p>
            </div>

            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <IoIosCheckmarkCircleOutline  size={35} className="text-[#2A254B]"/>
              <p className="py-4 font-normal text-2xl">Made by true artisans</p>
              <p>Hand-crafted goods made with real passion and craftsmanship.</p>
            </div>

            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <MdOutlinePriceChange size={35} className="text-[#2A254B]"/>
              <p className="py-4 font-normal text-2xl">Unbeatable prices</p>
              <p>For our material and quality, you won&apos;t find better prices anywhere.</p>
            </div>

            <div className="flex flex-col   md:w-[25%] p-4  rounded-lg">
            <LuSprout size={35} className="text-[#2A254B]"/>
              <p className="py-4 font-normal text-2xl">Recycled packaging</p>
              <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
            </div>
          </div>
        </div>

        <div className='px-6 md:px-12 py-8 bg-[#2A254B] mt-8'>
        <div className="flex flex-wrap gap-12 md:gap-[100px] lg:gap-[200px]">
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

      </section>
    </div>
  );
};

export default Productlisting;
