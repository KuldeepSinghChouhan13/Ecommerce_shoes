import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className=" px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64  md:mx-0 mx-auto text-center md:text-left">
          <h3 className="font-bold text-2xl">
             <span>Shoes Factory</span>
          </h3>
        </div>

        <div className="flex-grow flex flex-wrap md:p1-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-lg mb-3">
              MENU
            </h2>
            <ul className="list-none mb-10">
              <li>Featurs</li>
              <li className="mt-1">Info Center</li>
              <li className="mt-1">Blog</li>
              <li className="mt-1">Login</li>
            </ul>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-lg mb-3">
              COMPANY
            </h2>
            <ul className="list-none mb-10">
              <li className="mt-1">About Us</li>
              <li className="mt-1">Private Policy</li>
              <li className="mt-1">Terms & Conditions</li>
              <li className="mt-1">Login</li>
            </ul>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-lg mb-3">
              CONTACT
            </h2>
            <ul className="list-none mb-10">
              <li className="mt-1">Contact Sales</li>
              <li className="mt-1">9638521475</li>
              <li className="mt-1">New Blog</li>
              <li className="mt-1">9632587410</li>
            </ul>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium tracking-widest text-lg mb-3">
              TECH SUPPOR
            </h2>
            <ul className="list-none mb-10">
              <li className="mt-1">Contact support</li>
              <li className="mt-1">Info Center</li>
              <li className="mt-1">Activate</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-500 text-white">
        <div className=" mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-sm text-center sm:text-left">
            @ 2025 FootShoes - <span>@copyright</span>
          </p>
          <p className="inline-flex sm:ml-auto sm:mt-0 gap-5 mt-2 justify-center sm:justify-start ">
            <span>
              
              <FaFacebook size={30}/>
            </span>
            <span>
              <FaInstagram size={30}/>
            </span>
            <span>
              <FaTwitter size={30}/>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
