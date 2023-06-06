import React, { useEffect, useState } from 'react'
import logo from '../images/Siber-logo.png'
import {navList} from '../constants/navlist'
import { Link } from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx'
import {MdClose} from 'react-icons/md'
const Navbar = () => {

    const [open,isOpen] = useState(false)

  return (
    <header className='h-20 relative '>
        <nav className='max-w-maxWidth mx-auto h-full px-5 flex items-center justify-between '>
            <Link to='/'>
                <img src={logo} alt="siber logo" className='w-[70%] md:w-[90%] lg:w-[100%]' />
            </Link>
            <div className='flex items-center'>
                <ul className={`md:flex z-[999] overflow-hidden absolute md:h-auto left-0 ${open ? 'h-52 py-2' : 'h-0 py-0 opacity-10'} md:opacity-100 transition-all ease-in duration-150 top-full space-y-4 md:space-y-0 bg-white md:bg-transparent md:static rounded-b-lg md:rounded-none w-full md:w-auto`}>
                    {navList.map((list) => {
                        return <li className='text-black md:text-white text-md mx-3 cursor-pointer hover:text-darkPurple transition-colors ease-in duration-150' key={list.id}>
                            <Link to={list.path}>{list.name}</Link>
                        </li>
                    })}
                </ul>
                <ul className='text-white text-3xl md:hidden cursor-pointer hover:text-darkPurple'
                onClick={()=>isOpen(!open)}>
                    {open ? <MdClose /> : <RxHamburgerMenu />}
                </ul>
                <ul className='ml-10 hidden lg:block'>
                    <button className='cursor-pointer uppercase text-white bg-darkGreen px-7 py-3 rounded-md text-sm
                    hover:bg-darkPurple transition-colors ease-in duration-150'>
                        get started
                    </button>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
