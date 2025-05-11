import React from "react";
import CarCard from "./CarCard";
const cars = [
    {
      name: "Urus",
      type: "Sport Car",
      transmission: "Manual",
      fuel: "198L",
      seats: 2,
      price: "26.74",
      image: "https://car-showcase-gamma-vert.vercel.app/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdc6yzmwrq%2Fimage%2Fupload%2Fv1688531680%2Fsuy276ohtqoxiz89s2zf.png&w=3840&q=75", // adjust path accordingly
    },
    {
      name: "McLaren",
      type: "Sport Car",
      transmission: "Manual",
      fuel: "190L",
      seats: 1,
      price: "37.74",
      image: "https://car-showcase-gamma-vert.vercel.app/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdc6yzmwrq%2Fimage%2Fupload%2Fv1688775905%2Fsf8f1ywlx7o6bggt9jkv.png&w=3840&q=75",
    },
    {
      name: "Lamborgini",
      type: "Sport Car",
      transmission: "Manual",
      fuel: "198L",
      seats: 2,
      price: "67.00",
      image: "https://car-showcase-gamma-vert.vercel.app/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdc6yzmwrq%2Fimage%2Fupload%2Fv1688654881%2Feo14tqmgr6g9fzb79ro1.png&w=3840&q=75",
    },
    {
      name: "Hyundai",
      type: "Large Car",
      transmission: "Manual",
      fuel: "190L",
      seats: 6,
      price: "22.32",
      image: "https://car-showcase-gamma-vert.vercel.app/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdc6yzmwrq%2Fimage%2Fupload%2Fv1688189315%2Frjjoa56gtru03tzapuj0.png&w=3840&q=75",
    },
  ];
  
const CarList = () => {
  return (
    <div className="flex flex-wrap gap-3.5 justify-center mb-[57px] lg:justify-start">
      {cars.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  );
};

export default CarList;
