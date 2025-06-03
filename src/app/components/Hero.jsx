'use client'

import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="bgurl py-12" >


    <div  className="container mx-auto px-10 py-10 mb-20 mt-10 ">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl leading-tight text-blue-900 mb-4">
          Welcome To JavaScript Projects
          </h1>
          <p className="text-gray-700 " >explore projects built with various JS technologies.</p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 mt-5">
      <a href="#projects">Go to Projects</a>
</button>

        </div>

          <div className="w-full sm:w-4/5 lg:w-1/2">
          <img
            src="./images/herojs.png"
            alt="Bootstrap Themes"
            className="mx-auto lg:ml-auto w-full h-auto mt-2  animate-float "
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
      </div>
    </div>
        </section>
  );
};

export default HeroSection;
