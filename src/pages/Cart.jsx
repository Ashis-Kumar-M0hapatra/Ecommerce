import React from "react";
import { useCart } from "../context/CartContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-10">
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center h-screen">
          <img src="/assets/abandoned-cart.png" alt="" />
          <p className="text-2xl text-center font-bold text-red-900 mt-4">
            Looks like you've not added anything! Don't make the cart sad!{" "}
            <br /> Go and explore our top exclusive offers only for you
          </p>
          <button className="bg-red-900 text-white font-bold text-lg px-4 py-2 rounded-lg mt-4 hover:bg-red-800 active:translate-y-1 transform transition-transform duration-300 hover:scale-105">
            <Link to="/">Hurry up! Shop Now</Link>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center border p-4 rounded-md shadow-sm gap-4"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded flex-shrink-0"
                />

                <div className="flex flex-col min-w-[150px]">
                  <h3 className="text-sm font-semibold truncate">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    Size: {item.selectedSize} | Color: {item.selectedColor}
                  </p>
                </div>

                <div className="flex items-center ml-auto">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                    className="px-2 py-1 border bg-gray-100 rounded-l hover:bg-gray-200"
                  >
                    <FaMinus />
                  </button>
                  <span className="px-3 border-t border-b">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 border bg-gray-100 rounded-r hover:bg-gray-200"
                  >
                    <FaPlus />
                  </button>
                </div>

                <div className="w-24 text-right font-semibold text-red-600 ml-4">
                  ${item.price * item.quantity}
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="border p-6 rounded-md shadow-md h-fit">
            <h3 className="text-lg font-bold mb-4">Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$0.00</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full mt-4 bg-red-600 text-white py-2 rounded hover:bg-red-700">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
