import React, { useState } from 'react';
import HotCollectionsCardList from "./HotCollectionsCardList";

function HotCollections() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className='relative px-[15px] lg:pl-[137px] lg:pr-[137px]'>
      {/* Background Blur */}
      <div className="absolute top-[600px] xl:top-[500px] xl:left-[600px] w-50 h-20 xl:w-72 xl:h-30 bg-gradient-to-r from-[#f714f3b4] to-[#d513dfce] blur-3xl -z-10"></div>

      {/* Header */}
      <div className='flex justify-between mb-[30px]'>
        <h2 className='text-[#818CF8] text-[24px] font-bold'>🔥 Hot Collections</h2>
        <p className='text-[#818CF8] text-[16px] font-normal cursor-pointer'>view all</p>
      </div>

      {/* Main Car List */}
      <div className='flex flex-col justify-center mb-[63px] items-center'>
        <HotCollectionsCardList />
        
        {/* More Info Button */}
        {!showMore && (
          <div className='relative'>
            <button 
              className="main-btn"
              onClick={() => setShowMore(true)}
            >
              <span className="text-[16px]">More Cars</span>
            </button>
            <div className="absolute top-[60px] left-[30px] w-50 h-50 bg-gradient-to-r from-[#2d44a1] to-[#202E66] blur-3xl -z-10"></div>
          </div>
        )}
      </div>

      {/* More Cars Section */}
      {showMore && (
        <div className="flex flex-col items-center mb-[80px]">
          <h3 className="text-[#818CF8] text-[30px] font-semibold mb-8">More Cars</h3>
          <HotCollectionsCardList />
        </div>
      )}
    </div>
  );
}

export default HotCollections;
