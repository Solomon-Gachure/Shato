import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
const RootsLayout = () => {
  return (
    <div className='max-w-[1400px] h-screen flex flex-col pt-2 mx-auto p-2  '>
        
        <header className='flex justify-between '>
            <div>
                <AiOutlineMenu className='' size={30}/>
            </div>
            <h3 className='text-black'>BebaBeba</h3>
            <nav className='text-orange-500 hidden md:flex  gap-4  right-0 '>
                <NavLink className="active:bg-orange-500 active:text-white " to="/">Home</NavLink>
                <NavLink className="active:bg-orange-500 active:text-white " to="about">About</NavLink>
                <NavLink className="active:bg-orange-500 active:text-white " to="book">Book</NavLink>
                <NavLink className="active:bg-orange-500 active:text-white " to="parcel">Parcel</NavLink>
                <NavLink className="active:bg-orange-500 active:text-white " to="contact">Contact</NavLink>

            </nav>
            
        </header>
        
        <main>
            <Outlet/>
        </main>
        
    </div>
  )
}

export default RootsLayout