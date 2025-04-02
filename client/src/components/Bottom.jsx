import React from 'react'

const Bottom = () => {
  return (
    <div className='w-full md:h-15 h-25 backdrop-blur-md z-50 px-5 justify-center  items-start font-bold flex md:justify-between md:items-center flex-col md:flex-row bottom-0 fixed'>
        <div className='flex  gap-2.5'>
            <div className='transition-colors hover:cursor-pointer hover:text-blue-400'><a target='__blank' href="https://github.com/Krishna72user">Github</a></div>
            <div className='transition-colors hover:text-blue-400 hover:cursor-pointer'> <a href="https://www.linkedin.com/in/krishna-laha-a28477303/" target='__blank'>Linkdin</a></div>
            <div className='transition-colors hover:text-blue-400 hover:cursor-pointer'><a href="https://www.facebook.com/krishna.laha.5496/" target='__blank'>Facebook</a></div>
        </div>
        <div>
            &copy;  Krishna Laha. All rights reserved.
        </div>
    </div>
  )
}

export default Bottom
