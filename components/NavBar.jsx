import Link from "next/link";
import React from "react";
import {FiSearch} from 'react-icons/fi'
import {AiOutlineMenu} from 'react-icons/ai'
const NavBar = () => {
  return (
    <div className="w-full h-12 flex items-center justify-between m-2">
      <div>
        <h1 className="text-orange-500 text-xl">Abhishek</h1>
      </div>
      <div className=" border-2 border-gray-400 px-1 h-7 hidden lg:flex">
        <FiSearch size={20}/>
        <input placeholder="Type here..." className=" px-2"/>
      </div>
      <div className=" items-center space-x-3 mr-3 hidden lg:flex">
        <Link  href={'#'}>Home</Link>
        <Link href={'#'}>About</Link>
        <Link href={'#'}>Contact</Link>
        <Link href={'#'}>Media</Link>
      </div>
      <div className="lg:hidden m-2">
<AiOutlineMenu size={30} />
      </div>
    </div>
  );
};

export default NavBar;
