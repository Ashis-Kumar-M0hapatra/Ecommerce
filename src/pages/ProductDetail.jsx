import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const fashionCategories = [
  "mens-shirts",
  "womens-dresses",
  "womens-shoes",
  "mens-shoes",
];

const sizes = ["XS", "S", "M", "L", "XL"];
const colors = ["Black", "White", "Red", "Blue", "Green"];

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(
      {
        ...product,
        selectedSize,
        selectedColor,
      },
      quantity
    );
  };

  if (!product) return <p className="text-center py-20">Loading...</p>;

  const isFashion = fashionCategories.includes(product.category);

  return (
    <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
      <div className="lg:w-1/2">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full rounded-lg shadow-md"
        />
      </div>

      <div className="lg:w-1/2">
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>

        <div className="flex items-center text-sm text-yellow-500 mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-600 ml-2">(60 Reviews)</span>
        </div>

        <p className="text-2xl font-semibold text-red-600 mb-4">
          ${product.price}.00
        </p>
        <p className="text-gray-700 mb-4">{product.description}</p>

        {isFashion && (
          <>
            <div className="mb-4">
              <span className="font-semibold">Sizes:</span>
              <div className="flex gap-2 mt-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    className={`border px-3 py-1 rounded-full ${
                      selectedSize === size
                        ? "bg-red-600 text-white"
                        : "hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <span className="font-semibold">Colors:</span>
              <div className="flex gap-2 mt-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    className={`border px-3 py-1 rounded-full ${
                      selectedColor === color
                        ? "bg-red-600 text-white"
                        : "hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="flex items-center mb-6">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-1 border bg-gray-200 rounded-l hover:bg-gray-300"
          >
            <FaMinus />
          </button>
          <span className="px-4 py-1 border-t border-b">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="px-3 py-1 border bg-gray-200 rounded-r hover:bg-gray-300"
          >
            <FaPlus />
          </button>

          <button
            onClick={handleAddToCart}
            className="ml-4 px-6 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
