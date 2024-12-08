import React from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function Hmecards() {
  return (
    <div className="pt-10 bg-white">
      <div className="text-4xl font-light ml-16">New Ceramics</div>
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

      <div className='text-center pt-8'>
        <button className='px-7 py-3 bg-slate-100 hover:bg-slate-200'>View Collection</button>
      </div>

      <div>
        <h1 className='text-3xl font-light ml-16'>Our popular products</h1>
        <div className="flex gap-6 px-16 pt-10 flex-wrap md:flex-nowrap">
          {/* Card 1 */}
          <div className="">
            <Link href="./Productlisting">
              <Image
                src="/img/sofa.jpg"
                alt="Chair"
                width={600}
                height={400}
              />
            </Link>
            <p className="mt-3 text-lg font-normal">The popular suede sofa</p>
            <p className="">£250</p>
          </div>

          {/* Card 2 */}
          <div className="">
            <Link href="./Productlisting">
              <Image
                src="/img/ch.jpg"
                alt="Chair"
                width={300}
                height={350}
              />
            </Link>
            <p className="mt-3 text-lg font-normal">The Dandy Chair</p>
            <p className="">£250</p>
          </div>

          {/* Card 3 */}
          <div className="">
            <Link href="./Productlisting">
              <Image
                src="/img/dd.jpg"
                alt="Chair"
                width={300}
                height={350}
              />
            </Link>
            <p className="mt-3 text-lg font-normal">The Dandy Chair</p>
            <p className="">£250</p>
          </div>
        </div>
      </div>

      <div className='text-center py-8'>
        <Link href="./allprod">
          <button className='px-7 py-3 bg-slate-100 hover:bg-slate-200'>View Collection</button>
        </Link>
      </div>
    </div>
  );
}