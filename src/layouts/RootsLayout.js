import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const RootsLayout = () => {
    const [nav,setNav] = useState(false)
    
  return (
    <div className='max-w-[1400px] h-full flex flex-col pt-2 mx-auto p-2 bg-cyan-950  '>
        
        <header className='flex justify-between '>
            <div className='cursor-pointer' onClick={()=>setNav(!nav)}>
                <AiOutlineMenu className='sm:hidden text-white font-bold' size={30}/>
            </div>
            <h3 className=' font-bold text-2xl text-lime-500'>BebaBeba</h3>
            <nav className='text-orange-500 hidden md:flex  gap-4  right-0 '>
                <NavLink className="active:bg-orange-500 font-bold active:text-white " to="/">Home</NavLink>
                <NavLink className="active:bg-orange-500 font-bold active:text-white " to="about">About</NavLink>
                <NavLink className="active:bg-orange-500 font-bold active:text-white " to="book">Book</NavLink>
                <NavLink className="active:bg-orange-500 font-bold active:text-white " to="parcel">Parcel</NavLink>
                <NavLink className="active:bg-orange-500 font-bold active:text-white " to="contact">Contact</NavLink>

            </nav>
            <div className={!nav ? "hidden   top-0 left-0 fixed w-[250px] duration-300 h-screen z-10": "top-0  left-[-100] duration-300" } >
                <AiOutlineClose className='cursor-pointer text-white'  onClick={()=>setNav(!nav)} size={30}/>
            
                <NavLink className="flex flex-col text-orange-500"  to="/">Home</NavLink>
                <NavLink className="flex flex-col text-orange-500"  to="about">About</NavLink>
                <NavLink className="flex flex-col text-orange-500"  to="book">Book</NavLink>
                <NavLink className="flex flex-col text-orange-500"  to="parcel">Parcel</NavLink>
                <NavLink className="flex flex-col text-orange-500"  to="contact">Contact</NavLink>
                

            </div>
            
        </header>
        
        <main >
            <Outlet/>
        </main>
        
    </div>
  )
}

export default RootsLayout