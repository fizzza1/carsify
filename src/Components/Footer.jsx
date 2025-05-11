import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] text-white pt-[64px]">
        <div className='border-t border-gray-700 mb-[55px]'></div>
      <div className="md:pl-[46px] px-[20px] md:pr-[50px] lg:pr-[300px] justify-around border-b border-gray-700 pb-[49px]">
        <div className="flex md:flex-row flex-col items-start md:justify-between mb-10 md:mb-0">
            <div className='md:mb-[0] mb-[30px]'>
          <h1 className="text-[30px] font-bold text-white">Carsify</h1>
          <p className="text-[16px] font-normal mt-3">Carhub 2023<br />All Rights Reserved ©</p>
            </div>
          <div className='md:mb-[0] mb-[30px] '>
            <h3 className="font-bold text-[18px] mb-[26px]">About</h3>
            <ul className="space-y-[23px] text-[#9CA3AF] text-[16px] font-normal">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Bussiness Relation</li>
            </ul>
          </div>

          <div className='md:mb-[0] mb-[30px] '>
            <h3 className="font-bold text-[18px] mb-[26px]">Company</h3>
            <ul className="space-y-[23px] text-[#9CA3AF] text-[16px] font-normal">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>

          <div className='md:mb-[0] mb-[30px] '>
            <h3 className="font-bold text-[18px] mb-[26px] ">Socials</h3>
            <ul className="space-y-[23px] text-[#9CA3AF] text-[16px] font-normal">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
        </div>
        </div>

      </div>

      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 pt-[50px] px-[20px] md:pr-[46px] md:pl-[46px] pb-[51px]">
        <p className='text-[14px] font-normal text-[#9CA3AF]'>©2023 CarHub. All reserved</p>
        <div className="flex gap-2 mt-3 md:mt-0">
          <p className='text-[14px] font-normal text-[#9CA3AF]'>Privacy & Policy</p>
          <p className='text-[14px] font-normal text-[#9CA3AF]'>Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
