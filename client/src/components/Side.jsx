import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useTheme } from '../Context/ContextProvider';
const Side = () => {
  const [dark,setDark] = useTheme()
  return (
    <div className='flex justify-center py-10'>
    <div className={`md:fixed md:top-[34vh] md:left-0 mx-auto md:w-[2.5em] backdrop-blur-md lg:w-[3em] rounded-2xl md:rounded-l-none md:rounded-r-2xl md:py-5 items-center md:gap-7 ${dark?"bg-white/10 ":"bg-gray-400/20 "} p-3 flex gap-2 md:text-xl text-[15px] lg:text-2xl md:flex-col`}> 
      <div className='text-[15px] md:hidden font-bold'>Follow me </div>
      <div className={`h-[0.1em] w-12 md:hidden ${dark?"bg-white":"bg-black"}`}> </div>
      <a href="https://github.com/Krishna72user" target='__blank'>
      <FaGithub className='hover:text-orange-500  transition-colors duration-300'/>
      </a>
      <a href="https://www.linkedin.com/in/krishna-laha-a28477303/" target='__blank'>
      <CiLinkedin className='hover:text-orange-500  transition-colors duration-300'/>
      </a>
      <a href="https://www.facebook.com/krishna.laha.5496/" target='__blank'>
      <FaFacebookF className='hover:text-orange-500  transition-colors duration-300'/>
      </a>
      <a href="https://www.instagram.com/its_krishna_404/" target='__blank'> 
      <FaInstagram  className='hover:text-orange-500  transition-colors duration-300'/>
      </a>
    </div>
    </div>
  )
}

export default Side
