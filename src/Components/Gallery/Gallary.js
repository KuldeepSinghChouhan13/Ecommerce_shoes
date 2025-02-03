import React from "react";
import s1 from '../../assist/s1.jpeg';
import s2 from '../../assist/s2.jpeg';
import s3 from '../../assist/s3.jpg';
import s4 from '../../assist/s4.jpeg'
import s5 from '../../assist/s5.jpg';
import s6 from '../../assist/s6.jpg';

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className=" mx-2 flex flex-wrap">
        <div className="flex py-2 px-0 flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2 ">
            <div className="md:p-2 p-1 w-1/2 " >
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block hover:scale-90 transition-duration-300"
                src={s1}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block hover:scale-90 transition-duration-500"
                src={s2}
              />
            </div>
            <div className="md:p-2 p-1 w-full ">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block hover:scale-90 transition-duration-500"
                src={s3}
              />
            </div>
          </div>
          <div className="flex  flex-wrap w-1/2 ">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block hover:scale-90 transition-duration-500"
                src={s4}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block hover:scale-90 transition-duration-500"
                src={s5}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block hover:scale-90 transition-duration-500"
                src={s6}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
