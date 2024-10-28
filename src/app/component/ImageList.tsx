

import React from "react";
import Image from "next/image";

const ImageList = () => {
  const dishes = [
    {
      name: "Shwarma",
      image: "/Shwarma.jpg",
    },
    {
      name: "Zinger Burger",
      image: "/Zingerburger.jpg",
    },
    {
      name: "Pizza",
      image: "/Pizza.jpg",
    },
    {
      name: "Fries",
      image: "/Fries.jpg",
    },
    {
      name: "Pasta",
      image: "/Pasta.jpg",
    },
    {
      name: "Nuggets",
      image: "/Nugts.jpg",
    },
    {
      name: "Kabab",
      image: "/Kabab.jpg",
    },
    {
      name: "Tikka",
      image: "/Tikka.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {dishes.map((dish, index) => (
        <div
          key={index}
          className="relative group rounded-lg overflow-hidden shadow-lg bg-red-600 p-2 transition duration-300 transform hover:bg-red-700"
        >
          <div className="overflow-hidden rounded-lg">
            <Image
              src={dish.image}
              alt={dish.name}
              width={300}
              height={200}
              className="transition-transform duration-300 transform group-hover:scale-110" // Image zoom effect on hover
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="font-bold">{dish.name}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
