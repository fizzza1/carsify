import React, { useState } from "react";
import Heart from "/src/assets/heart-outline.svg"
import People from "/src/assets/people.svg"
import Fueltank from "/src/assets/fuel-tank.svg"
import steering from "/src/assets/steering-wheel.svg"
import { FaHeart } from 'react-icons/fa';

const CarCard = ({ car }) => {
  const [liked, setLiked] = useState(false);
  
  return (
    <div className="relative rounded-xl z-10 p-4 bg-[#121b2e] w-full max-w-[317px] text-white border border-[#2e3440] shadow-lg hover:shadow-pink-500/20 transition">
      <div className="absolute top-40 left-20 w-42 h-20 bg-gradient-to-r rotate-80 from-[#ffffff6b] to-[#ffffff82]  blur-3xl  -z-10"></div>
      <div className="flex justify-between items-center mb-[22px]">
        <div>
          <h2 className="text-[20px] font-bold mb-[3px]">{car.name}</h2>
          <p className="text-[16px font-normal] text-[#9CA3AF]">{car.type}</p>
        </div>
         <FaHeart
          className={`
            cursor-pointer mb-7 hover:shadow transition-transform duration-200 
            ${liked ? 'text-pink-500' : 'text-white'} 
            hover:-translate-y-1
          `}
          size={22}
          onClick={() => setLiked(!liked)}
        />
      </div>

      <div className="h-[180px] flex items-center justify-center mb-[26px]">
  <img src={car.image} alt={car.name} className="max-h-full object-contain" />
</div>


      <div className="flex justify-between text-xs text-gray-400 mb-[25px]">
        <div className="flex items-center gap-1">
        <img src={steering} alt="" className="w-3.5" /> 
        <span className="text-[14px] font-normal text-[#9CA3AF] ">{car.transmission}</span>
        </div>
        <div className="flex items-center gap-1">
        <img src={Fueltank} alt="" className="w-3.5" /> 
        <span className="text-[14px] font-normal text-[#9CA3AF] ">{car.fuel}</span>
        </div>
        <div className="flex items-center gap-1">
        <img src={People} alt="" className="w-3.5" />
        <span className="text-[14px] font-normal text-[#9CA3AF] "> {car.seats} People</span>
        </div>
      </div>  

      <div className="flex justify-between items-center mb-[10px]">
        <div className="text-[24px] font-bold">
          ${car.price}
          <span className="text-[12px] font-bold">/day</span>
        </div>
        <button class="main-btn"><span className="text-[16px]" >More Info</span></button>

      </div>
    </div>
  );
};

export default CarCard;
