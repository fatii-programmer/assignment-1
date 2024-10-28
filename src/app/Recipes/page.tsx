

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Recipes = () => {
  const dishes = [
    {
      name: "Shwarma",
      image: "/Shwarma.jpg",
      recipe: "Shwarma banane ke liye meat (chicken, beef, ya lamb) ko spices aur yogurt mein marinate karna hota hai. Isay vertical rotisserie par pakaya jata hai."
    },
    {
      name: "Zinger Burger",
      image: "/Zingerburger.jpg",
      recipe: "Zinger Burger banane ke liye chicken fillet ko masalon mein marinate karte hain, phir ise deep fry karte hain aur sesame seed bun mein serve karte hain."
    },
    {
      name: "Pizza",
      image: "/Pizza.jpg",
      recipe: "Pizza ka dough flour, water, yeast, aur salt se banaya jata hai. Isay tomato sauce, cheese, aur toppings ke saath bake kiya jata hai."
    },
    {
      name: "Fries",
      image: "/Fries.jpg",
      recipe: "French fries banane ke liye potatoes ko strips mein kaat kar deep fry kiya jata hai jab tak ye golden aur crispy ho jaye."
    },
    {
      name: "Pasta",
      image: "/Pasta.jpg",
      recipe: "Pasta ko durum wheat flour ko paani mein boil karke tayar kiya jata hai aur rich tomato sauce ke saath toss kiya jata hai."
    },
    {
      name: "Nuggets",
      image: "/Nugts.jpg",
      recipe: "Chicken nuggets chicken ko bite-sized tukdon mein kaat kar batter mein dip karke fry kiye jate hain."
    },
    {
      name: "Kabab",
      image: "/Kabab.jpg",
      recipe: "Kabab masalon aur yogurt mein marinated meat se banaya jata hai. Isay grill kar ke naan ya salad ke saath serve karte hain."
    },
    {
      name: "Tikka",
      image: "/Tikka.jpg",
      recipe: "Chicken tikka chicken ko yogurt aur masalon mein marinate karke banaya jata hai. Isay grill ya bake karke serve karte hain."
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-4xl font-bold text-center mb-6 mt-4 hover:text-red-600">
        Our Delicious Dishes Recipes
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {dishes.map((dish, index) => (
          <div key={index} className="relative group rounded-lg overflow-hidden shadow-lg bg-red-600 p-2">
            <Image
              src={dish.image}
              alt={dish.name}
              width={300}
              height={200}
              className="transition-transform duration-300 transform group-hover:scale-105 rounded-lg"
            />
            <div className="text-center mt-2">
              <h2 className="font-bold">{dish.name}</h2>
              <p className="text-base">{dish.recipe}</p> 
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Link
          href="/"
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Recipes;
