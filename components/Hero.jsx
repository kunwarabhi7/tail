import React from 'react'

const Hero = () => {
  return (
    <div className='text-center flex flex-col mx-auto justify-center items-center space-y-7   w-full   h-[30rem]  md:h-[40rem]'>
      <h1 className='text-orange-600 text-xl md:text-2xl'>Growing With Data Analytics</h1>
      <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl  font-semibold'>Grow With Data</h1>
      <h1>Fast, flexible finacing for ...</h1>
      <p className='text-gray-400 px-2'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platform</p>
      <button className='bg-orange-600 p-2 rounded-md'>Get Started</button>
    </div>
  )
}

export default Hero
