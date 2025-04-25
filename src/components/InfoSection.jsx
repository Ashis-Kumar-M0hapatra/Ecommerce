import React from "react";
import {
  FaHeadset,
  FaLock,
  FaMoneyBillWave,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";

const InfoSection = () => {
  const InfoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Free Shipping",
      description: "Get your orders delivered for free on orders over $50",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "24/7 Support",
      description: "We're here to assist you anytime",
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Secure Payments",
      description: "Your payment information is safe with us",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: "Easy Returns",
      description: "Hassle-free returns within 30 days",
    },
    {
      icon: <FaTag className="text-3xl text-red-600" />,
      title: "Discounts & Offers",
      description: "Exclusive deals and discounts for our members",
    },
  ];
  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {InfoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            {item.icon}
            <h2 className="mt-4 text-xl font-semibold">{item.title}</h2>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
