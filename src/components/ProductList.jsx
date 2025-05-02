// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// const categoryMap = {
//   Electronics: "smartphones",
//   Fashion: "mens-shirts",
//   "Home & Kitchen": "home-decoration",
//   "Beauty & Personal Care": "fragrances",
//   "Sports & Outdoors": "mens-shoes",
//   Books: "books",
//   "Toys & Games": "lighting",
//   Automotive: "automotive",
//   "Health & Wellness": "groceries",
// };

// const ProductList = ({ selectedCategory }) => {
//   const [products, setProducts] = useState([]);
//   const { addToCart } = useCart();

//   useEffect(() => {
//     let url = "https://dummyjson.com/products";
//     const mapped = categoryMap[selectedCategory];
//     if (mapped) url = `https://dummyjson.com/products/category/${mapped}`;

//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products || data));
//   }, [selectedCategory]);

//   return (
//     <div className="py-8">
//       <h2 className="text-2xl font-bold mb-6 text-center">
//         {selectedCategory ? `${selectedCategory} Products` : "Featured Products"}
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-16 lg:px-24">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="border rounded-lg shadow-md p-4 hover:shadow-lg transition"
//           >
//             <img
//               src={product.thumbnail}
//               alt={product.title}
//               className="h-40 w-full object-cover rounded"
//             />
//             <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
//             <p className="text-red-700 font-bold">${product.price}</p>
//             <div className="flex justify-between mt-2">
//               <Link
//                 to={`/products/${product.id}`}
//                 className="px-4 py-2 bg-red-700 text-white text-sm font-bold rounded hover:bg-red-800"
//               >
//                 View Details
//               </Link>
//               <button
//                 onClick={() => addToCart({ ...product, quantity: 1 })}
//                 className="px-4 py-2 bg-red-700 text-white text-sm font-bold rounded hover:bg-red-800"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;


import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const categoryMap = {
  Electronics: "smartphones",
  Fashion: "mens-shirts",
  "Home & Kitchen": "home-decoration",
  "Beauty & Personal Care": "fragrances",
  "Sports & Outdoors": "mens-shoes",
  Books: "books",
  "Toys & Games": "lighting",
  Automotive: "automotive",
  "Health & Wellness": "groceries",
};

const ProductList = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase();

  useEffect(() => {
    let url = "https://dummyjson.com/products";
    const mapped = categoryMap[selectedCategory];
    if (mapped) url = `https://dummyjson.com/products/category/${mapped}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data.products || data));
  }, [selectedCategory]);

  const filteredProducts = products.filter(
    (p) =>
      (!searchQuery || p.title.toLowerCase().includes(searchQuery)) &&
      (!selectedCategory || categoryMap[selectedCategory] === p.category)
  );

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {selectedCategory ? `${selectedCategory} Products` : "Featured Products"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-16 lg:px-24">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center text-gray-600 text-lg font-medium">
            No products found.
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-40 w-full object-cover rounded"
              />
              <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
              <p className="text-red-700 font-bold">${product.price}</p>
              <div className="flex justify-between mt-2">
                <Link
                  to={`/products/${product.id}`}
                  className="px-4 py-2 bg-red-700 text-white text-sm font-bold rounded hover:bg-red-800"
                >
                  View Details
                </Link>
                <button
                  onClick={() => addToCart({ ...product, quantity: 1 })}
                  className="px-4 py-2 bg-red-700 text-white text-sm font-bold rounded hover:bg-red-800"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;

