import Link from "next/link";
import React, { useState } from "react";
import {FiSearch} from 'react-icons/fi'
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className="w-full h-12 flex items-center justify-between m-2 mx-auto fixed top-2">
      <div>
        <h1 className="text-orange-600 ml-3 text-xl">Abhishek</h1>
      </div>
      <div className=" border-2 border-gray-400 px-1 h-7 ml-64 mt-5 hidden lg:flex">
        <FiSearch size={20}/>
        <input placeholder="Type here..." className=" px-2"/>
      </div>
      <div className=" items-center space-x-3 mr-3 hidden lg:flex">
      <Link  href="#sec1">Home</Link>
        <Link href="#sec2">Company</Link>
        <Link href="#sec3">Resources</Link>
        <Link href="#sec4">About</Link>
        <Link href="#sec5">Contact</Link>
      </div>
      <div className="lg:hidden m-2 fixed right-0" onClick={handleNav}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30}  />}

      </div>
      {nav ?  <div onClick={handleNav} className="flex top-0 uppercase left-0 fixed  space-y-10 h-full p-8  w-[60%] border-r-2 lg:hidden flex-col">
     <h1 className="text-orange-600 text-xl">Abhishek</h1>

     <Link  href="#sec1">Home</Link>
        <Link href="#sec2">Company</Link>
        <Link href="#sec3">Resources</Link>
        <Link href="#sec4">About</Link>
        <Link href="#sec5">Contact</Link>
     </div>  : ''}
    
    </div>
  );
};

export default NavBar;
