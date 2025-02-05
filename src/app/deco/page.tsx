"use client";
{/*
import { useEffect, useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { FaSearch, FaUser, FaCartPlus, FaTimes, FaShoppingCart } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
  rating?: number | null;
  category?: string;
  discount?: number;
  reviews?: number;
}

const DecoPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cartMessage, setCartMessage] = useState("");
  const [isMessageVisible, setMessageVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://hackathon-apis.vercel.app/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();

        const productsWithRatings = data.map((product: Product) => ({
          ...product,
          rating: (Math.random() * 5).toFixed(1),
        }));

        setProducts(productsWithRatings);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product: Product) => {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  
    const existingItemIndex = cart.findIndex((item: Product) => item.id === product.id);
  
    if (existingItemIndex !== -1) {
      const updatedProduct = { 
        ...cart[existingItemIndex],
        quantity: cart[existingItemIndex].quantity + 1 
      };
      
      cart[existingItemIndex] = updatedProduct;
    } else {
      const newProduct = { ...product, quantity: 1 };
      cart.push(newProduct);
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
  
    setCartMessage("Item Added to Cart Successfully!");
    setMessageVisible(true);
    setTimeout(() => setMessageVisible(false), 3000);
  };
  
  if (loading) return <p className="text-center">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
        <hr className="border-t border-gray-300 my-1 ml-6 mr-6" />


      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">All Home Deco Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg shadow-md bg-white relative min-h-[350px]">
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover rounded-t-lg" />
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center pt-4 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < (product.rating ?? 0) ? "currentColor" : "none"}
                        stroke="currentColor"
                      />
                    ))}
                  </div>
                  <span className="ml-2 pt-4 text-sm text-gray-500">
                    {product.rating ? `${product.rating}/5` : "0/5"}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <p className="text-black font-bold text-lg">€{product.price}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center border border-black rounded-3xl text-white px-3 py-1 transition duration-300"
                  >
                    <FaCartPlus className="text-gray-900 size-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isMessageVisible && (
        <div className="fixed top-4 right-4 bg-green-500 text-white text-center py-3 px-6 rounded-lg shadow-md flex items-center justify-between w-80">
          <p>{cartMessage}</p>
          <FaTimes className="cursor-pointer" onClick={() => setMessageVisible(false)} size={18} />
        </div>
      )}
    </div>
  );
};

export default DecoPage;
 */}



import { useEffect, useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { FaCartPlus, FaTimes } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  slug: string;
  rating?: number | null;
  category?: string;
  discount?: number;
  reviews?: number;
}

const DecoPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cartMessage, setCartMessage] = useState("");
  const [isMessageVisible, setMessageVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://hackathon-apis.vercel.app/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();

        const productsWithRatings = data.map((product: Product) => ({
          ...product,
          rating: (Math.random() * 5).toFixed(1),
        }));

        setProducts(productsWithRatings);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product: Product) => {
    // Retrieve the current cart from localStorage
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Check if the product already exists in the cart
    const existingItemIndex = cart.findIndex((item: Product) => item.id === product.id);

    if (existingItemIndex !== -1) {
      // If the product exists, update its quantity by 1
      const updatedProduct = {
        ...cart[existingItemIndex],
        quantity: cart[existingItemIndex].quantity + 1,
      };

      // Update the product in the cart
      cart[existingItemIndex] = updatedProduct;
    } else {
      // If the product does not exist, add it as a new item with quantity set to 1
      const newProduct = { ...product, quantity: 1 };
      cart.push(newProduct);
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Show success message
    setCartMessage("Item Added to Cart Successfully!");
    setMessageVisible(true);
    setTimeout(() => setMessageVisible(false), 3000);
  };

  if (loading) return <p className="text-center">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
      <hr className="border-t border-gray-300 my-1 ml-6 mr-6" />

      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">All Home Deco Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg shadow-md bg-white relative min-h-[350px]">
              <Link href={`/product/${product.slug}`} passHref>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover rounded-t-lg cursor-pointer"
                />
              </Link>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center pt-4 text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < (product.rating ?? 0) ? "currentColor" : "none"}
                        stroke="currentColor"
                      />
                    ))}
                  </div>
                  <span className="ml-2 pt-4 text-sm text-gray-500">
                    {product.rating ? `${product.rating}/5` : "0/5"}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <p className="text-black font-bold text-lg">€{product.price}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center border border-black rounded-3xl text-white px-3 py-1 transition duration-300"
                  >
                    <FaCartPlus className="text-gray-900 size-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isMessageVisible && (
        <div className="fixed top-4 right-4 bg-green-500 text-white text-center py-3 px-6 rounded-lg shadow-md flex items-center justify-between w-80">
          <p>{cartMessage}</p>
          <FaTimes className="cursor-pointer" onClick={() => setMessageVisible(false)} size={18} />
        </div>
      )}
    </div>
  );
};

export default DecoPage;
