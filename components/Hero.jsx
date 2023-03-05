import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div id="sec1" className="text-center flex flex-col mx-auto justify-center items-center space-y-7   w-full   h-[30rem]  md:h-[40rem]">
      <h1 className="text-orange-600 text-xl md:text-2xl">
        Growing With Data Analytics
      </h1>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl  font-semibold">
        Grow With Data
      </h1>
      <h1 className="text-orange-500"> Fast, flexible finacing for   <Typed 
          strings={[
            "BTB platform", 
            "BTC platform",
            "SASS platform", 
          ]} 
          typeSpeed={120}
          backSpeed={140}
          className="ml-2 text-orange-400 bg-orange-600"
          loop 
        >
        </Typed>
        </h1>
      <p className="text-gray-400 px-2">
        Monitor your data analytics to increase revenue for 
      
      </p>
      <button className="bg-orange-600 p-2 rounded-md">Get Started</button>
    </div>
  );
};

export default Hero;
