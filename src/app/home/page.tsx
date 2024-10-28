

import ImageList from "../component/ImageList";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      
      
      <h1 className="text-5xl font-extrabold mb-8 mt-4 hover:text-red-600">Welcome to the Home Page</h1> {/* Heading yahan add kiya gaya hai */}

     
      <ImageList />

      
      <Link href="/" className="mt-8">
        <button className="bg-red-600 px-6 py-2 rounded text-white font-bold hover:bg-red-700 transition duration-300">
          Back
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
