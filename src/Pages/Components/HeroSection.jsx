import React from "react";

function HeroSection() {
  return (
    <div className="relative w-full heroSection mb-[155px] md:mb-[278px] flex justify-between items-center !pl-[15px] lg:!pl-[137px] pr-[17px] z-10">
      <div className="heroSectionLeft">
        <h1 className="text-6xl heroSectionHeading md:text-5xl lg:text-7xl font-bold ">
          Find, book, rent
          <span className="block">a car quick and</span>
          <span className="block">super easy!</span>
        </h1>
        <p className="text-xl heroSectionpara md:text-2xl max-w-[500px] md:mt-6 mt-4 mb-4 lg:mb-8 text-slate-400">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <button class="main-btn"><span>LOGIN</span></button>

      </div>
      <div className="w-[53%] relative heroSectionImage">
        <img
          src="https://car-showcase-gamma-vert.vercel.app/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdc6yzmwrq%2Fimage%2Fupload%2Fv1688168825%2Fjneoddgvbn65gplgirzr.png&w=1920&q=75"
          alt=""
        />
         
      </div>
    </div>
  );
}

export default HeroSection;
