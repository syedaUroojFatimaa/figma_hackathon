import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Popular() {
  return (
    <div>
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
      <button className='px-7 py-3 bg-[#2A254B] hover:bg-[#342e5c] text-white'>View Collection</button>
    </Link>
  </div>
  </div>
  );
}
