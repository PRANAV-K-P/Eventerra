import React from "react";
import heroImage from "../../../assets/images/hero.jpeg";

const Body1 = () => {
  return (
    <div
      className="flex flex-col items-center w-full min-h-screen "
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="bg-black text-white font-roboto bg-opacity-70 mt-12 md:mt-24 lg:mt-32 xl:mt-40 w-3/4 text-3xl md:text-4xl lg:text-5xl text-center p-4 md:p-6 lg:p-8">
        <span className="font-semibold">Eventerra</span>, The Gateway to Virtual
        Experiences!
        <div className="mt-2 md:mt-3">
          🎉 Explore Boundless Virtual Events 🌍
        </div>
        <div className="mt-2 md:mt-3">
          Discover a world of immersive virtual events, from exciting
          conferences to mesmerizing concerts.
        </div>
      </div>
      <button className="mt-6 px-6 py-3 text-xl md:text-2xl lg:text-3xl xl:text-4xl bg-blue-500 hover:bg-blue-600 text-white rounded-full">
        Explore Upcoming Events
      </button>
    </div>
  );
};

export default Body1;
