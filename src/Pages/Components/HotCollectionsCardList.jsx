import React from "react";
import HotCollectionsCard from "./HotCollectionCard";
const cars = [
    {
      name: "Urus",
      type: "Sport Car",
      transmission: "Manual",
      fuel: "198L",
      seats: 2,
      price: "26.74",
      image: "/src/assets/Image/img2.png",
    },
    {
      name: "McLaren",
      type: "Sport Car",
      transmission: "Manual",
      fuel: "190L",
      seats: 1,
      price: "37.74",
      image: "/src/assets/Image/images__7_-removebg-preview.png",
    },
    {
      name: "Lamborgini",
      type: "Sport Car",
      transmission: "Manual",
      fuel: "198L",
      seats: 2,
      price: "67.00",
      image: "/src/assets/Image/images__8_-removebg-preview.png",
    },
    {
      name: "Hyundai",
      type: "Large Car",
      transmission: "Manual",
      fuel: "190L",
      seats: 6,
      price: "22.32",
      image: "/src/assets/Image/images__9_-removebg-preview.png",
    },
    {
        name: "Urus",
        type: "Sport Car",
        transmission: "Manual",
        fuel: "198L",
        seats: 2,
        price: "26.74",
        image: "https://car-showcase-gamma-vert.vercel.app/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdc6yzmwrq%2Fimage%2Fupload%2Fv1688392410%2Fcrwnb1kwcicsc4lwbwp5.png&w=3840&q=75",
      },
      {
        name: "McLaren",
        type: "Sport Car",
        transmission: "Manual",
        fuel: "190L",
        seats: 1,
        price: "37.74",
        image: "/src/assets/Image/images__10_-removebg-preview.png",
      },
      {
        name: "Lamborgini",
        type: "Sport Car",
        transmission: "Manual",
        fuel: "198L",
        seats: 2,
        price: "67.00",
        image: "https://car-showcase-gamma-vert.vercel.app/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdc6yzmwrq%2Fimage%2Fupload%2Fv1688392155%2Fnn6lzdfm0h3otncsr8x5.png&w=3840&q=75",
      },
      {
        name: "Hyundai",
        type: "Large Car",
        transmission: "Manual",
        fuel: "190L",
        seats: 6,
        price: "22.32",
        image: "https://car-showcase-gamma-vert.vercel.app/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdc6yzmwrq%2Fimage%2Fupload%2Fv1688188588%2Fl5t24mtpsydavcvfddty.png&w=3840&q=75",
      },
  ];
  
const CarList = () => {
  return (
    <div className="flex flex-wrap gap-3.5 cursor-pointer justify-center mb-[57px] lg:justify-start">
      {cars.map((car, index) => (
        <HotCollectionsCard key={index} car={car} />
      ))}
    </div>
  );
};

export default CarList;
