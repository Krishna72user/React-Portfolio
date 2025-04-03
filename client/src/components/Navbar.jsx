import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { motion } from "motion/react"
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useHidden } from '../Context/ContextProvider';
import { useTheme } from '../Context/ContextProvider';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { useContext } from 'react';
import { context } from '../Context/ContextProvider';
const Navbar = () => {
  const [hide, setHide] = useHidden()
  const [dark, setDark] = useTheme()
  const location = useLocation()
  const {open,setOpen} = useContext(context)
  useEffect(() => {
    if (open) {
      setHide(true)
      document.body.style.overflow = 'hidden'
    }
    else {
      setHide(false)
      document.body.style.overflow = 'auto'
    }
  }, [open])
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])


  return (
    <>

      <div className={`h-2 z-50 fixed top-0 w-full ${dark ? 'bg-slate-950' : "bg-white"} `}></div>
      <div className={`text-xl md:text-2xl z-50 font-bold fixed text-orange-500  ${dark ? open ? "bg-transparent" : 'bg-transparent' : "bg-white"} pl-2  pb-4 md:pb-7 md:top-4 top-0 left-0`}><span className='pl-4 md:pl-5 text-white pt-3  pb-3 bg-orange-500 rounded-full'>KRI</span>SHNA<span className='text-5xl text-red-800'>.</span></div>
      <div className='h-[8em] '></div>


      <div className={`fixed top-2 z-50 flex items-center backdrop-blur-sm lg:px-3 px-1 ${dark ? 'bg-slate-950/30' : "bg-white"} right-0`}>
        {dark && <MdOutlineLightMode
          onClick={() => { setDark(false) }}
          className=' lg:size-16 size-13 md:size-15  p-2 hover:cursor-pointer right-9' />}
        {!dark && <MdDarkMode
          onClick={() => { setDark(true) }}
          className='lg:size-16 size-13 md:size-15 hover:cursor-pointer p-3' />}
       {!open && <button onClick={() => {
          setOpen(true)
        }} className='block hover:cursor-pointer z-50 p-2 md:p-4' ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className='md:size-13 size-10' xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15 6H1v1h14V6zm0 3H1v1h14V9z"></path></svg></button>}

     {open && <IoMdClose onClick={() => { setOpen(false) }} className='hover:cursor-pointer px-3 p-3 size-15 md:size-20' />}
      </div>

      <motion.div
        initial={{
          y: -900,
        }}
        transition={{
          duration: 0.5
        }}
        animate={{
          y: open ? -135 : -900
        }}
        className='fixed w-screen  z-40'
      >
        <div className='flex gap-15   flex-col h-screen   w-full items-center backdrop-blur-md  mx-auto  justify-center lg:text-6xl md:text-5xl text-4xl '>
          <NavLink className={({ isActive }) => (isActive ? "p-1 px-3 rounded-3xl transition-colors duration-300 text-orange-500  font-bold" : "hover:text-orange-500")} to='/'>
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "p-1 px-3 rounded-3xl transition-colors duration-300 text-orange-500 font-bold" : "hover:text-orange-500")} to='/projects'>
            Projects
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "p-1 px-3 rounded-3xl transition-colors duration-300 text-orange-500 font-bold" : "hover:text-orange-500")} to='/about'>
            About
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "p-1 px-3 rounded-3xl transition-colors duration-300  text-orange-500 font-bold" : "hover:text-orange-500")} to='/contact'>
            Contact
          </NavLink>
        </div>
      </motion.div>
    </>

  )
}

export default Navbar
