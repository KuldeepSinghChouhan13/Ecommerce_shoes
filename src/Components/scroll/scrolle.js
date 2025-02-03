import React, { useRef } from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Runing from '../../assist/Runing.jpg';
import Football from '../../assist/Fb.jpg';
import Basketball from '../../assist/BB.jpg';
import Gym from '../../assist/Gym.jpeg';
import Tennis from '../../assist/Tenis.jpg';
import Dance from '../../assist/Dance.jpg';

function Scroll() {
  const scrollContainerRef = useRef(null);

  const images = [
    { src: Runing, label: 'Running' },
    { src: Football, label: 'Football' },
    { src: Basketball, label: 'Basketball' },
    { src: Gym, label: 'Gym' },
    { src: Tennis, label: 'Tennis' },
    { src: Dance, label: 'Dance' },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400, 
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400, 
        behavior: 'smooth',
      });
    }
  };

  return (  
    <>
      <div className="py-8 bg-white mx-10 relative">
        <div className='flex items-center justify-between '>
        <h1 className="text-2xl ml-4 font-bold text-center ">Shop By Sport</h1>
        <div className='mr-2 p-2'>        
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
            ref={scrollContainerRef}
            className="absolute inset-y-0 left-0 right-0 overflow-x-scroll scroll-smooth scroll-hide flex space-x-6 p-3"
          >
            {images.map((image, index) => ( 
              <div
                key={index}
                className="flex flex-col   min-w-[400px]"
              >
                <img
                  src={image.src}
                  alt={image.label}
                  className="  absolute w-[400px] h-[300px] filter grayscale rounded-lg shadow-lg object-cover"
                />
                <button className=" relative w-[100px] px-4 mt-[60%] ml-[20px] py-2 bg-gray-200 text-black rounded-full text-sm font-medium hover:text-white hover:bg-gray-900" >
                  {image.label}
                </button>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </>
  );
}

export default Scroll;
