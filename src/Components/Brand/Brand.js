import React, { useRef } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Puma from "../../assist/Puma.jpg";
import Nike from "../../assist/Nike.jpg";
import Adidas from "../../assist/Adidas.jpeg";
import Campus from "../../assist/Campus.jpeg";
import HRX from "../../assist/Hrx.jpg";
import Asian from "../../assist/Asian.jpg";

function Brand() {
  const brandContainerRef = useRef(null);

  const shoes = [
    { src: Puma, label: "Puma" },
    { src: Nike, label: "Nike" },
    { src: Adidas, label: "Adidas" },
    { src: Campus, label: "Campus" },
    { src: Asian, label: "Asian" },
    { src: HRX, label: "HRX" },
  ];

  const scrollLeft = () => {
    if (brandContainerRef.current) {
      brandContainerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };
  const scrollRight = () => {
    if (brandContainerRef.current) {
      brandContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="py-8  bg-white mx-10 relative">
        <div className=" itmen-center mb-10 ">
          <h1 className="text-6xl text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold ">
            YOUR IMPERATION YOUR BRAND
          </h1>
          <p className="text-center text-xl">
            Choose Your Favoraite Brand & Style Your Foot
          </p>
        </div>

        <div className="flex items-center justify-between ">
          <h1 className="text-2xl ml-4 font-bold text-center ">
            Shoes By Brand
          </h1>
          <div className="mr-2 p-2">
            <button
              onClick={scrollLeft}
              className=" bg-gray-200 text-black p-3 rounded-full  hover:bg-gray-500"
            >
              <SlArrowLeft />
            </button>

            <button
              onClick={scrollRight}
              className=" bg-gray-200 text-black p-3 ml-1 rounded-full  hover:bg-gray-500"
            >
              <SlArrowRight />
            </button>
          </div>
        </div>

        <div className="relative h-[350px] overflow-hidden ">
          <div
            ref={brandContainerRef}
            className="absolute inset-y-0 left-0 right-0 overflow-x-scroll scroll-smooth scroll-hide flex space-x-6 p-3"
          >
            {shoes.map((Shoes, index) => (
              <div key={index} className="flex flex-col   min-w-[250px]">
                <img
                  src={Shoes.src}
                  alt={Shoes.label}
                  className="  absolute w-[250px] h-[300px] rounded-lg shadow-lg object-cover object-center"
                />
                <button className=" relative w-[100px] px-4 mt-[100%] ml-[10px] py-2 bg-gray-200 text-black rounded-full text-sm font-medium hover:text-white hover:bg-gray-900">
                  {Shoes.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Brand;
