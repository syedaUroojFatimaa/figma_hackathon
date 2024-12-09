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
}