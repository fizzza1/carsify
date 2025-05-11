import React from 'react'
import HotCollectionsCardList from "./HotCollectionsCardList"

function HotCollections() {
  return (
    <div className='relative px-[15px] lg:pl-[137px] lg:pr-[137px]'>
      <div className="absolute top-[600px] xl:top-[500px] xl:left-[600px] w-50 h-20 xl:w-72 xl:h-30 bg-gradient-to-r from-[#f714f3b4] to-[#d513dfce]  blur-3xl  -z-10"></div>
    <div className='flex justify-between mb-[30px]'>
        <h2 className='text-[#818CF8] text-[24px] font-bold '>🔥 Hot Collections</h2>
        <p className='text-[#818CF8] text-[16px] font-normal cursor-pointer'>view all</p>
    </div>
        <div className='flex flex-col justify-center mb-[63px] items-center'>
            <HotCollectionsCardList />
            <div className='relative'>
        <button class="main-btn"><span className="text-[16px]">More Info</span></button>
      <div className="absolute top-[60px] left-[30px] w-50 h-50 bg-gradient-to-r from-[#2d44a1] to-[#202E66] blur-3xl -z-10"></div>
            </div>
        </div>
    </div>
  )
}

export default HotCollections;