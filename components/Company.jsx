import React from "react";

const Company = () => {
  return (
    <div className="w-full   sm:my-16 mx-auto ">
      <div className="grid w-full h-screen  md:grid-cols-2  ">
        <div className="w-full   ">
          <img className="w-full h-full mt-8 md:mt-0 object-fill" src="https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_960_720.jpg" />
        </div>
        <div className="text-center space-y-1 mx-6 md:space-y-12 mt-12 md:mt-0">
          <h2 className="text-orange-700 uppercase text-center  md:text-4xl">
            Data ANALYTICS DASHBOARD
          </h2>
          <h1 className="font-semibold md:text-2xl">Manage Data Analytics Centrally</h1>
          <p className="md:px-6 text-sm md:text-xl sm:pb-4 mx-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            exercitationem asperiores iure rerum, ab illum eius? Ratione
            repudiandae labore aperiam officia amet nam nemo deserunt recusandae
            architecto quam optio quia sequi ducimus dicta, incidunt laboriosam
            illum? Ducimus ea quidem atque?
          </p>
          <button className="bg-black/50 border-orange-700 border-2  hover:border-black hover:text-black hover:bg-orange-700 cursor-pointer text-orange-700 p-2 rounded-lg"> Get Started</button>
        </div>
      </div>
      
    </div>
  );
};

export default Company;
