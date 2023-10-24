import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
const RootsLayout = () => {
  return (
    <div className='max-w-[1400px] h-screen flex flex-col pt-2 mx-auto p-2  bg-cyan-950'>
        
        <header className='flex justify-between '>
            <div>
                <AiOutlineMenu className='text-white' size={30}/>
            </div>
            <h3 className='text-white'>BebaBeba</h3>
            <nav className='text-orange-500 hidden md:flex  gap-4  right-0 '>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="book">Book</NavLink>
                <NavLink to="parcel">Parcel</NavLink>
                <NavLink to="contact">Contact</NavLink>

            </nav>
            
        </header>
        
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootsLayout