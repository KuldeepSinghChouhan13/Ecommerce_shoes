import React from "react";
import bannerVideo from "../../assist/banner.mp4";

const Herosection = () => {
  return (
    <>
      <div className="relative">
        <div>
          <video
            className="w-full h-auto object-cover"
            src={bannerVideo}
            autoPlay
            loop
            muted
          />
        </div>
      </div>
      <div className=" itmen-center mt-6">
        <h1 className="text-6xl text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold ">
          DISCOVER YOUR ADEVENTURE!
        </h1>
        <p className="text-center text-xl">
          Shop our Latest Arrival & Unleash Your Style
        </p>
        
      </div>
      <div className="flex justify-center gap-2 mt-5 text-xl font-semibold">
        <button className="bg-black text-white py-1 px-4 hover:bg-gray-500 rounded-full " type="button">Shop</button>
        <button className="bg-black text-white py-1 px-4 hover:bg-gray-500 rounded-full " type="button">Explore</button>
      </div>
    </>
  );
};

export default Herosection;
