

import Link from "next/link"; 
import ImageList from "./component/ImageList";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-between bg-[url('/path/to/your/background-image.jpg')] bg-cover bg-no-repeat">
      <header className="flex flex-col items-center mt-8">
        <h1 className="text-5xl font-extrabold mb-4 text-white hover:text-red-600 transition duration-300">
          Welcome to Our Food Recipe Website
        </h1>
        <nav>
          <div className="flex space-x-4 mb-2">
            <Link href="/home" className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition duration-300">Home</Link>
            <Link href="/Recipes" className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition duration-300">Recipes</Link>
            <Link href="/AboutUs" className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition duration-300">About Us</Link>
            <Link href="/Contact" className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition duration-300">Contact</Link>
          </div>
        </nav>
      </header>

      
      <main className="flex flex-col justify-center items-center min-h-screen text-white text-center mb-8">
        <p className="text-lg mb-4">Discover delicious recipes to satisfy your cravings!</p>
        <h2 className="text-center text-4xl my-4 font-semibold text-red-600 tracking-wide transition-colors duration-300 hover:text-white">
          Featured Recipes
        </h2>
        <ImageList />
      </main>

      <footer className="bg-red-700 p-4 text-white text-center shadow-md">
        <p className="font-semibold tracking-wide transition-colors duration-300 hover:text-black">
          &copy; Food Recipe 2024
        </p>
      </footer>
    </div>
  );
};
