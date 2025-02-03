import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { GiBallerinaShoes } from "react-icons/gi";

function Navbar({cart}) {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleChange = () => {
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
  };

  return (
      <header className="  text-black fixed top-0 left-0 right-0 border-b border-gray-200 bg-white z-50">
        <div className=" mx-auto  flex justify-between py-4 items-center">
          <div className="flex">
            <GiBallerinaShoes size={35} />
            <h3 className="font-bold text-3xl">Shoes Factory</h3>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center text-[20px] justify-center font-semibold">
              <Link to="/">
                <li className="mr-5 hover:text-blue-500 hover:underline cursor-pointer">
                  Home
                </li>
              </Link>
              <Link to="/Product">
                <li className="mr-5 hover:text-blue-500 hover:underline cursor-pointer">
                  All products
                </li>
              </Link>
              <li className="mr-5 hover:text-blue-500 hover:underline cursor-pointer">Mens</li>
              <li className="mr-5 hover:text-blue-500 hover:underline cursor-pointer">
                Womens
              </li>
            </ul>
          </div>

          {isOpen ? (
            <div>
              <ul className="flex flex-col gap1-10 text-2xl absolute top-[73px] left-0 h-screen w-full z-10 bg-red-500 text-white items-center  justify-center font-semibold">
                <Link to="/">
                  <li className="mt-5 hover:text-gray-600 cursor-pointer">
                    Home
                  </li>
                </Link>
                <Link to="/Product">
                  <li className="mt-5 hover:bg-gray-600 cursor-pointer">
                    All products
                  </li>
                </Link>
                <li className="mt-5 hover:text-gray-600 cursor-pointer">
                  Mens
                </li>
                <li className="mt-5 hover:text-gray-600 cursor-pointer">
                  Womens
                </li>
              </ul>
              <button
                className="absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer "
                onClick={ToggleChange}
              >
                <RxCross2 size={30} />
              </button>
            </div>
          ) : (
            ""
          )}

          <div className="flex items-center  text-black justify-center gap-5">
            <Link to="/Login">
              <button className=" border-0 py-1 px-2 text-[20px] focus:outline-none hover:underline hover:text-blue-500 rounded text-base font-bold">
                Login
              </button>    
            </Link>
            <Link to="/cart" className="text-black rounded flex px-[2px] hover:text-blue-500 font-semibold text-2xl" >
                <GrCart size={30}/> 
                <div className="absolute top-2.5 right-[10px]  bg-blue-500 text-white text-sm font-bold rounded-full  w-6 flex items-center justify-center" >
                {cart.length} 
                </div>
            </Link>
            <Link>
              {isOpen ? (
                ""
              ) : (
                <button
                  className="text-white  md:hidden"
                  onClick={ToggleChange}
                >
                  <RxHamburgerMenu size={30} />
                </button>
              )}
            </Link>
          </div>
        </div>
      </header>
  );
}

export default Navbar;
