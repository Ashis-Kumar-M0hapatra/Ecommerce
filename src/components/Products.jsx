import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pb-10">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded shadow">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-40 object-cover"
          />
          <h3 className="font-bold text-lg">{product.title}</h3>
          <p>${product.price}</p>
          <div className="flex justify-between mt-4">
            <Link
              to={`/products/${product.id}`}
              className="text-sm text-blue-600 underline"
            >
              View Details
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
