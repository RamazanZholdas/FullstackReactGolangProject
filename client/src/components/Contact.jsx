import React from 'react';

function Contact() {
  return (
    <div className="px-2 flex max-w-screen-lg mx-auto pt-5 items-center flex-col">
      <p className="text-green-400 text-3xl font-semibold">
        Get in <span className="text-purple-800">touch</span> with us
      </p>
      <p className="text-white text-lg font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, earum.
      </p>
      <div className="flex flex-col items-center bg-transparent hover:shadow-lg hover:shadow-green-500 border-green-400 rounded-md border-2 w-1/2 h-72 mt-10">
        <p className="text-white text-2xl font-semibold mt-5">Send email</p>
        <input
          type="text"
          placeholder="Theme"
          className="w-3/5 py-2 px-2 mt-5 rounded-md focus:shadow-md focus:shadow-green-500"
        />
        <input
          type="textarea"
          placeholder="Your concers"
          className="h-72 w-3/5 py-2 px-2 mt-5 rounded-md"
        />
        <button className="bg-green-400 w-3/5 mt-5 mb-10 text-white font-semibold py-2 px-4 rounded hover:shadow-lg hover:shadow-purple-700">
          Send
        </button>
      </div>
    </div>
  );
}

export default Contact;
