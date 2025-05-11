import React from "react";
import UpDownArrow from "/src/assets/svg/chevrons-down-up.svg"
import Car from "/src/assets/svg/car-front.svg"
import carImage2 from "/src/assets/svg/codesandbox.svg"
import CarList from "./CarList";

const CarCatalogue = () => {
  return (
    <section className="relative px-[15px] lg:pl-[137px] lg:pr-[137px]">
      <div className="absolute top-[560px] xl:top-[580px] xl:left-[800px] w-50 h-20 xl:w-72 xl:h-30 bg-gradient-to-r from-[#4c21b8c0] to-[#5712abcf]  blur-3xl  -z-10"></div>
      <div className="mx-auto mb-[28px]">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Car Catalogue</h1>
        <p className="text-[18px] font-medium mb-6">Explore out cars you might like</p>

        <div className="flex xl:flex-row flex-col justify-between xl:items-center gap-4 mb-10">
        <div className="flex flex-col md:flex-row w-full border border-[#5e666f67] bg-[#1C2331] rounded-md overflow-hidden shadow-sm lg:w-[790px]">
  
  <div className="flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-[#b9b9b92b]">
    <img src={Car} alt="VW" className="w-5 h-5" />
    <input
      type="text"
      placeholder="Volkswagen..."
      className="bg-transparent text-[12px] text-white px-3 w-[300px] flex-1 focus:outline-none"
    />
  </div>

  <div className="flex items-center px-4 py-3 relative flex-1">
    <img src={carImage2} alt="VW" className="w-5 h-5" />
    <input
      type="text"
      placeholder="Volkswagen..."
      className="bg-transparent text-[12px] text-white px-3 pr-8 w-full focus:outline-none"
    />
    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" />
      </svg>
    </div>
  </div>

</div>



          <div className="flex gap-3">
          <div className="bg-[#1C2331] border border-[#5e666f67] justify-center cursor-pointer py-[10px] w-[150px] rounded-md text-sm flex items-center gap-2">
            <span>Choose Model</span>
            <img src={UpDownArrow} alt="" className="w-[18px]" />
          </div>

          <div className="bg-[#1C2331] w-[183px] py-[10px] justify-center border border-[#5e666f67] cursor-pointer rounded-md text-sm flex items-center gap-2">
            <span>Choose Fuel Type</span>
            <img src={UpDownArrow} alt="" className="w-[18px]" />
          </div>
        </div>
          </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#EC4899] font-semibold text-lg">
            <span>🚀</span>
            <span className="text-[24px] font-bold">Recommendations</span>
          </div>
          <button className="text-[#EC4899] cursor-pointer text-[16px]">View All</button>
        </div>
      </div>
      <CarList />
    </section>
  );
};

export default CarCatalogue;
