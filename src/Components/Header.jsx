import React, { useState } from "react";
import Moon from "/src/assets/svg/moon (1).svg";
import twitter from "/src/assets/svg/twitter (1).svg";
import github from "/src/assets/svg/github (1).svg";
import Menu from "/src/assets/svg/menu.svg";
import { Link } from "react-router-dom";


function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full mb-[150px] bg-transparent p-2 border-b border-b-gray-800">
      <div className="relative z-10 flex items-center justify-between px-2 md:px-6 max-w-[1440px] mx-auto">
        <div className="relative">
          <div className="absolute inset-0 w-72 h-20 rounded-2xl bg-gradient-to-r rotate-12 from-teal-500 to-green-700  blur-3xl  -z-10"></div>
          <span className="text-xl md:text-3xl font-bold text-white">
            Carsify
          </span>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <ul className="flex gap-3 justify-center items-center">
            <li>
              <span className="text-[#dde0e0]">Search</span>
            </li>
            <Link to="/addcar">
            <li>
              <span className="text-[#dde0e0]">AddCar</span>
            </li>
            </Link>
            <button class="main-btn"><span>LOGIN</span></button>
          </ul>
          <div className="flex items-center gap-4 border-l border-[#94A3B8] ml-4 pl-4">
            <img src={github} alt="GitHub" />
            <img src={twitter} alt="Twitter" />
            <img src={Moon} alt="Dark Mode Toggle" />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <img src={Moon} alt="Dark Mode Toggle" className="w-6 h-6" />
          <button onClick={() => setMenuOpen(!isMenuOpen)}>
            <img src={Menu} alt="Menu" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <>
        <div className={`md:hidden fixed top-0 pt-[70px] pl-[10px] left-0 h-full w-[100%] sm:w-[40%]  border-[#535353d5] border bg-[#202b3f] z-50  transform transition-transform duration-300 ease-in-out 
          }`}>

        <div className="md:hidden mt-3 px-4 space-y-3 relative z-10">
          <div className="absolute top-40 left-20 w-[170px] rotate-4 h-[76px] rounded-2xl bg-gradient-to-r from-slate-600 to-slate-500 blur-3xl"></div>
          <div className="text-[#ffffff]">Search</div>
          <div className="text-[#ffffff] mb-5">AddCar</div>
          <button class="main-btn"><span>LOGIN</span></button>
          <div className="flex gap-4 pt-3">
            <div className="flex gap-1.5">
            <img src={github} alt="GitHub" />
            <span>Github</span>
            </div>
            <div className="border-r border-[#cacacaa9]"></div>
            <div className="flex gap-1.5">
            <img src={twitter} alt="Twitter" />
            <span>Twitter</span>
            </div>
          </div>
        </div>
        
        </div>
        <div
            className="fixed top-0 left-[60%] sm:left-[40%] md:left-[30%] w-[40%] sm:w-[60%] md:w-[70%] h-full bg-gradient-to-r from-[#3636363d] via-black/10 to-black/10 backdrop-blur-sm z-[10]"
            onClick={() => setMenuOpen(false)}
          ></div>
        </>
      )}
    </div>
  );
}

export default Header;
