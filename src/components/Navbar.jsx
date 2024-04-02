import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
const navbar = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <span className='w-full text-3xl font-bold text-[#0cda50]'>REACT.</span>
            <ul className='hidden md:flex '>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div className='block md:hidden' onClick={(() => { setNav(!nav) })}>
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
            </div>
            <div className={nav? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#040404] pt-4 ease-in-out duration-500':' fixed left-[-100%]'}>
                <span className='w-full text-3xl font-bold text-[#0cda50] m-5'>REACT.</span>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default navbar