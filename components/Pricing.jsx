import React from "react";
import { HiUser, HiUserGroup, HiUsers } from "react-icons/hi";

const Pricing = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between px-7 bg-white text-black    space-y-6 w-full h-full py-8  items-center ">
      <div className="shadow-md bg-white w-64 h-60 text-black  font-semibold translation ease-in-out delay-150 cursor-pointer hover:translate-y-1 hover:scale-110 ">
        <HiUser size={30} className="bg-white mx-auto" fill="black" />

        <h1 className="bg-white text-black text-center border-y-2 font-bold text-xl ">
          Single User
        </h1>
        <p className="bg-white text-black text-center border-y-2"> ₹2999</p>
        <p className="bg-white text-black text-center border-y-2">
          500 GB Storage
        </p>
        <p className="bg-white text-black text-center border-y-2 ">
          {" "}
          I User Allowed
        </p>
        <p className="bg-white text-black text-center border-y-2">
          {" "}
          Send up to 2 GB
        </p>
        <button className="bg-orange-600 text-center py-2 px-3 mx-20 my-4 rounded-md">
          Start Trial
        </button>
      </div>
      <div className="shadow-md shadow-black bg-gray-400 w-64 h-60 text-black  font-semibold translation ease-in-out delay-150 cursor-pointer hover:translate-y-1 hover:scale-110">
        <HiUsers size={30} className="bg-gray-400 mx-auto" fill="black" />

        <h1 className="bg-gray-400 text-black text-center border-y-2 font-bold text-xl border-gray-400 ">
          Partnership
        </h1>
        <p className="bg-gray-400 text-black text-center border-y-2 border-gray-400"> ₹4999</p>
        <p className="bg-gray-400 text-black text-center border-y-2 border-gray-400">
          1 TB Storage
        </p>
        <p className="bg-gray-400 text-black text-center border-y-2 border-gray-400">
          {" "}
          3 User Allowed
        </p>
        <p className="bg-gray-400 text-black text-center border-y-2 border-gray-400">
          {" "}
          Send up to 10 GB
        </p>
        <button className="bg-orange-600 text-center py-2 px-3 mx-20 my-4 rounded-md">
          Start Trial
        </button>
      </div>
      <div className="shadow-md bg-white w-64 h-60 text-black  font-semibold translation ease-in-out delay-150 cursor-pointer hover:translate-y-1 hover:scale-110 ">
        <HiUserGroup size={30} className="bg-white mx-auto" fill="black" />

        <h1 className="bg-white text-black text-center border-y-2 font-bold text-xl ">
          Group Account
        </h1>
        <p className="bg-white text-black text-center border-y-2"> ₹8999</p>
        <p className="bg-white text-black text-center border-y-2">
          5 TB Storage
        </p>
        <p className="bg-white text-black text-center border-y-2 ">
          {" "}
          10 User Allowed
        </p>
        <p className="bg-white text-black text-center border-y-2">
          {" "}
          Send up to 20 GB
        </p>
        <button className="bg-orange-600 text-center py-2 px-3 mx-20 my-4 rounded-md">
          Start Trial
        </button>
      </div>
    </div>
  );
};

export default Pricing;
