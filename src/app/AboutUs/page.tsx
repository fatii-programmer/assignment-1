import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col lg:flex-row justify-center items-center text-white bg-[url('/background-image.jpg')] bg-cover bg-no-repeat px-4 lg:px-20 xl:px-40">
      <div className="flex-1 p-4 flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row justify-center mb-6 space-y-4 lg:space-y-0 lg:space-x-4">
          
          <div className="bg-black p-4 rounded shadow-lg w-full lg:w-72 h-auto flex flex-col justify-center transition-transform duration-300 hover:shadow-red-600">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 hover:text-red-600 transition duration-300 text-center">
              About Us
            </h2>
            <p className="text-lg leading-relaxed text-center">
              Welcome to our food recipe website! We are passionate about cooking and sharing recipes that everyone can enjoy.
            </p>
          </div>

          <div className="bg-black p-4 rounded shadow-lg w-full lg:w-72 h-auto flex flex-col justify-center transition-transform duration-300 hover:shadow-red-600">
             <h2 className="text-2xl lg:text-3xl font-semibold mb-4 hover:text-red-600 transition duration-300 text-center">
              Our Team
            </h2>
            <p className="text-lg leading-relaxed text-center">
              Our team consists of dedicated food lovers who bring you the best recipes from around the world.
            </p>
          </div>

          <div className="bg-black p-4 rounded shadow-lg w-full lg:w-72 h-auto flex flex-col justify-center transition-transform duration-300 hover:shadow-red-600">
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 hover:text-red-600 transition duration-300 text-center">
              Join Us!
            </h2>
            <p className="text-lg leading-relaxed text-center mb-6">
              Join our community of food lovers and share your culinary journey!
            </p>
          </div>
        </div>

        <div className="mt-8">
          <a 
            href="/" 
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>

      <div className="flex-1 hidden lg:block h-full bg-cover bg-center bg-[url('/background-image.jpg')]"></div>
    </div>
  );
};

export default AboutUs;
