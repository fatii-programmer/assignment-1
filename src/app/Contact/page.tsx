import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center text-white px-6 lg:px-20 xl:px-40 bg-[url('/Star.jpg')]">
      <div className="flex-1 p-4 flex flex-col justify-center items-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 hover:text-red-500 transition duration-300 text-center">
          Contact 
        </h1>

        <p className="text-lg leading-relaxed text-center mb-6 max-w-lg">
          We would love to hear from you! Please fill out the form below to get in touch with us.
        </p>

        <form className="bg-black p-6 rounded shadow-lg w-full max-w-md">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-2 border border-red-600 rounded bg-black text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              type="text"
              id="name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 border border-red-600 rounded bg-black text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              type="email"
              id="email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-2 border border-red-600 rounded bg-black text-white focus:outline-none focus:ring-2 focus:ring-red-600"
              id="message"
              rows={4} 
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300 w-full"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8">
          <a 
            href="/" 
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>

      <div className="flex-1 hidden lg:block h-full bg-black">
      </div>
    </div>
  );
};

export default Contact;
