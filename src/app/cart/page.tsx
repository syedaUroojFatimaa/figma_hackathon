"use client";
import React, { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";

const Cart = () => {
   
    const [cart, setCart] = useState(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        if (storedCart.length === 0) {
            return products.map((product) => ({ ...product, quantity: 1 }));
        }
        return storedCart;
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const updateQuantity = (id: number, quantity: number) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    const subTotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

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

            <div className="container mx-auto p-4">
                <h1 className="text-2xl text-[#2A254B] font-serif font-bold mb-4">Your shopping cart</h1>
                <div className="grid gap-4">
                    {cart.map((product) => (
                        <div key={product.id} className="flex items-center gap-4 p-4 border rounded-md shadow-sm">
                            <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded" />
                            <div className="flex-1">
                                <h2 className="text-lg font-bold">{product.name}</h2>
                                <p className="text-gray-600">{product.description}</p>
                                <p className="text-gray-800 font-semibold">Price: ${product.price}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <input
                                    type="number"
                                    min="1"
                                    value={product.quantity}
                                    onChange={(e) => updateQuantity(product.id, +e.target.value)}
                                    className="border text-black rounded w-16 text-center"
                                />
                                <p className="text-gray-800 font-semibold">
                                    Total: ${product.price * product.quantity}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 p-4 border-t text-slate-800">
                    <p className="text-right text-lg font-bold">Subtotal: ${subTotal}</p>
                    <p className="text-right text-sm text-gray-500">
                        Taxes and shipping are calculated at checkout.
                    </p>
                    <button className="mt-4 bg-slate-800 text-white py-2 px-4 rounded">
                        Go to Checkout
                    </button>
                </div>
            </div>

            <footer className="px-6 md:px-12 py-8 bg-[#2A254B] mt-8">
                <div className="flex flex-wrap gap-12 md:gap-[100px] lg:gap-[200px]">
                    <div className="text-gray-500 w-full sm:w-auto">
                        <h1 className="text-lg md:text-xl font-bold">Menu</h1>
                        <div className="space-y-2">
                            <h1><Link href={'/'}>New Arrivals</Link></h1>
                            <h1><Link href={'/'}>Best sellers</Link></h1>
                            <h1><Link href={'/'}>Recently viewed</Link></h1>
                            <h1><Link href={'/'}>Popular this week</Link></h1>
                            <h1><Link href={'/'}>All Products</Link></h1>
                        </div>
                    </div>
                    <div className="text-gray-500 w-full sm:w-auto">
                        <h1 className="text-lg md:text-xl font-bold">Categories</h1>
                        <div className="space-y-2">
                            <h1><Link href={'/'}>Crockery</Link></h1>
                            <h1><Link href={'/'}>Furniture</Link></h1>
                            <h1><Link href={'/'}>Homeware</Link></h1>
                            <h1><Link href={'/'}>Plant pots</Link></h1>
                            <h1><Link href={'/'}>Chairs</Link></h1>
                        </div>
                    </div>
                    <div className="text-gray-500 w-full sm:w-auto">
                        <h1 className="text-lg md:text-xl font-bold">Our Company</h1>
                        <div className="space-y-2">
                            <h1><Link href="/about">About us</Link></h1>
                            <h1><Link href={'/'}>Vacancies</Link></h1>
                            <h1><Link href={'/'}>Contact us</Link></h1>
                            <h1><Link href={'/'}>Privacy</Link></h1>
                            <h1><Link href={'/'}>Return policy</Link></h1>
                        </div>
                    </div>
                    <div className="text-white w-full sm:w-auto">
                        <h1 className="text-lg md:text-xl font-bold">Join our mailing list</h1>
                        <div className="mt-4">
                            <input
                                type="text"
                                placeholder="your@email.com"
                                className="w-full sm:w-[250px] lg:w-[300px] h-[48px] p-2 bg-transparent opacity-35 border border-white rounded-md"
                            />
                            <button className="mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md">
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="bg-[#4E4D93] my-8" />
                <div className="flex flex-wrap justify-between items-center text-white gap-4">
                    <div><h1>Copyright 2022 Avion LTD</h1></div>
                    <div className="flex gap-4">
                        <Link href={'/'}><FaSearch size={20} /></Link>
                        <Link href={'/'}><FaShoppingCart size={20} /></Link>
                        <Link href={'/'}><FaUser size={20} /></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Cart;
