import React from "react";
import DataTable from "react-data-table-component";
import img1 from "/src/assets/Image/images (3).jpg"; 
import img2 from "/src/assets/Image/images (4).jpg"; 
import img3 from "/src/assets/Image/istockphoto-1317804584-612x612.jpg"; 
import img4 from "/src/assets/Image/photo-1438761681033-6461ffad8d80.jpg"; 
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";


const data = [
  {
    id: 1,
    name: "Adison Bator",
    email: "hello@hourglassinc.com",
    avatar: img1,
    experience: "5 Years",
    rating: "Good",
    status: "Online",
  },
  {
    id: 2,
    name: "Maren Schleifer",
    email: "hello@layers.to",
    avatar: img2,
    experience: "2 Years",
    rating: "Fair",
    status: "Online",
  },
  {
    id: 3,
    name: "Mira Rhiel Madsen",
    email: "hi@feather.dev",
    avatar: img3,
    experience: "5 Years",
    rating: "Good",
    status: "Offline",
  },
  {
    id: 3,
    name: "Mira Rhiel Madsen",
    email: "hi@feather.dev",
    avatar: img4,
    experience: "6 Years",
    rating: "Good",
    status: "Online",
  },
];

const columns = [
  {
    name: (
      <div className="flex text-[13px] items-center gap-1">
        Caregiver <MdOutlineKeyboardDoubleArrowDown className="text-[12px] text-gray-400" />
      </div>
    ),
    cell: row => (
      <div className="flex items-center gap-3">
        <img src={row.avatar} alt={row.name} className="w-8 h-8 object-cover rounded-full" />
        <div>
          <div className="font-medium text-gray-800">{row.name}</div>
          <div className="text-sm text-gray-500">{row.email}</div>
        </div>
      </div>
    ),
  },
  {
    name: (
      <div className="flex text-[13px] items-center gap-1">
        Experience <MdOutlineKeyboardDoubleArrowDown className="text-[12px] text-gray-400" />
      </div>
    ),
    cell: row => <span className="text-gray-700 p-7">{row.experience} </span>,
  },
  {
    name:(
      <div className="flex text-[13px] items-center gap-1">
        Rating <MdOutlineKeyboardDoubleArrowDown className="text-[12px] text-gray-400" />
      </div>
    ),
    cell: row => <span className="text-gray-700">{row.rating}</span>,
  },
  {
    name: (
      <div className="flex text-[13px] items-center gap-1">
        Status <MdOutlineKeyboardDoubleArrowDown className="text-[12px] text-gray-400" />
      </div>
    ),
    cell: row => <span className={`px-3 py-1 rounded-full text-[12px] font-medium ${
      row.status === "Online"
        ? "bg-green-100 text-green-600"
        : "bg-red-100 text-red-600"
    }`}>{row.status}</span>,
  },
  {
    name: (
      <div className="flex text-[13px] items-center gap-1">
        Actions <MdOutlineKeyboardDoubleArrowDown className="text-[12px] text-gray-400" />
      </div>
    ),
    cell: row => <span className="text-gray-400 pl-4 text-[22px] cursor-pointer">&#8942;</span>,
  },
];

const customStyle = {
  headCells : {
    style:{
      backgroundColor: "#F1F3FB"
    }
  },
  rows:{
    stripedStyle:{
      backgroundColor: "#F1F3FB"
    }
  }
}


function AddCar() {
  return (
    <div className="p-6 bg-[#F2F2F2] rounded-xl w-[80%] mx-auto shadow-md">
      <DataTable
        columns={columns}
        data={data}
        striped
        customStyles={customStyle}
      />
      
    </div>
  );
}

export default AddCar;
