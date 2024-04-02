import React from 'react'
import { ReactTyped,Typed } from "react-typed";const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='uppercase text-green-300 font-bold'>growing with data analytics</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold'>Grow with data</h1>
                <div className='flex justify-center items-center '>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast , flexible financing for</p>
                    <ReactTyped className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'  strings={['btb','btc','sass']} typeSpeed={120}  backSpeed={140} loop></ReactTyped>
                </div>
                <p className='text-gray-500 md:text-2xl text-xl font-bold p-4'> monitor your data analytics to increase revenue for btb , btc & sass platforms </p>
                <button className=' bg-green-400 w-[200px] rounded-md font-semibold my-3 mx-auto text-black py-3'> Get Started</button>
            </div>
        </div>
    )
}

export default Hero