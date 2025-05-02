import React, {useState} from "react";
import { Categories } from "../categoryData/mockData";
import { PiArrowBendDownRightBold } from "react-icons/pi";
import InfoSection from "../components/InfoSection";
import ProductList from "../components/ProductList";
import { Link } from "react-router-dom";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <>
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
            SHOP BY CATEGORIES
          </div>
          <ul className="space-y-4 bg-gray-100 p-3 border">
            {Categories.map((category, index) => (
              <li
                key={index}
                className={`flex items-center text-sm font-bold ${
                  selectedCategory === category
                    ? "text-red-600"
                    : "text-red-900"
                } hover:text-red-500 hover:scale-105 duration-500 cursor-pointer`}
                onClick={() =>
                  setSelectedCategory(
                    selectedCategory === category ? null : category
                  )
                }
              >
                <PiArrowBendDownRightBold className="w-3 h-3 mr-2.5" />
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img src="/assets/hero-image.png" alt="" className=" relative h-full w-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <h1 className="sm:text-6xl text-5xl font-bold mb-5 drop-shadow-[3px_3px_1px_rgb(0,0,0,1)]">
              Shop the Latest{" "}
              <span className="text-red-900 drop-shadow-[3px_3px_1px_white]">
                Trends
              </span>
            </h1>
            <p className="text-xl mb-3 font-semibold drop-shadow-[3px_3px_1px_rgb(0,0,0,1)] ">
              Discover the best products at unbeatable prices.
            </p>
            <Link to="/productlist">
            <button className="p-3 border bg-red-950 font-extrabold rounded-xl drop-shadow-[1px_1px_3px_white] cursor-pointer hover:bg-red-900 active:translate-y-1 transform transition-transform duration-300 hover:scale-105">
              SHOP NOW
            </button>
            </Link>
          </div>
        </div>
      </div>
      <InfoSection />
    <ProductList selectedCategory={selectedCategory} />
    </div>
    </>
  );
};

export default Home;