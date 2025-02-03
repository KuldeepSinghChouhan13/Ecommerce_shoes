import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";


const Service = () => {
  return (
    <> 
    <div className='mb-10 mt-5 px-2 flex py-10 gap-10 items-center justify-center flex-wrap'>
        <div className='bg-red-500 py-3  px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] cursor-pointer hover:scale-110 transition-duration-500' >
            < FaShippingFast size={30} />
            <p>FREE SHIPING  </p>
        </div>

        <div className='bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] cursor-pointer hover:scale-110 transition-duration-500' >
        <MdOutlineProductionQuantityLimits  size={30} />
            <p>AUTHENTIC PRODUCTS  </p>
        </div>

        <div className='bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] cursor-pointer hover:scale-110 transition-duration-500' >
        <TbTruckReturn size={30}/>
            <p>EASY RETURN </p>
        </div>

        <div className='bg-red-500 py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] cursor-pointer hover:scale-110 transition-duration-500' >
        <MdOutlinePayment  size={30}/>
            <p> SECURE PAYMENT </p>
        </div>
    </div>
    </>
  )
}

export default Service;