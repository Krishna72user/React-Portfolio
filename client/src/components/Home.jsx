import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react'
import { useState } from 'react';
import { easeIn } from 'motion';
import { useHidden, useTheme } from '../Context/ContextProvider';
const Home = () => {
  const [hide] = useHidden()
  const [dark,setDark] = useTheme()
  const [hover, setHover] = useState(false)
  const [chover, setcHover] = useState(false)
  const navigate = useNavigate()
  return (
    <div className='flex  gap-5 pb-8 flex-wrap justify-around w-full '>
      <div className="w-[30em] lg:w-[35em]  flex pl-9 pb-6 pt-4 flex-col gap-3">
        <div className='lg:text-5xl text-4xl font-bold'>Welcome!</div>
        <div className=''>
        <div className='lg:text-3xl w-auto md:text-2xl  text-2xl'>I'm Krishna Laha</div>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'I am a Full Stack Developer',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'I am a Freelancer',
              1000,
              'I am a Front-end Developer',
              1000,
              'I am a Back-end Developer',
              2000,
              'I love coding',
              3000
            ]}
            wrapper="span"
            speed={40}
            className='text-2xl font-bold lg:text-3xl'
            repeat={Infinity}
          />
        </div>
          <div className='font-medium pr-7 mt-8 '>
          A passionate full-stack developer crafting elegant web applications with seamless user experiences.I specialize in building scalable and efficient solutions. Let's connect and bring ideas to life!
          </div>

        <div className={`flex gap-7 ${hide?'hidden':''} pt-5 mt-1`}>
          <motion.button
            onHoverStart={() => { setHover(true) }}
            onHoverEnd={() => { setHover(false) }}
            transition={{
              duration: 0.4
            }}
            whileHover={{
              color: dark?'black':'white',
            }}
            style={{
              fontWeight:'bold',
              backgroundColor:'transparent',
              color:dark?'white':'black',
            }}
            className={`overflow-hidden p-1 px-3 z-10 relative border-2 ${dark? 'border-white':'border-black' }font-extrabold`}
          >
            <motion.span
              initial={{
                x: -12,
                y: 40,
                opacity:0,
                backgroundColor:dark?'white':'black'
              }}
              style={{

              }}
              transition={{
                duration: 0.5
              }}
              animate={{
                backgroundColor:dark?'white':'black',
                y:hover?-4:40,
                opacity:hover?1:0,
                scaleY:hover?2:1
              }}
              className={`w-full h-full -z-20   absolute`}></motion.span>
              <a
               href="/resume.pdf" className='w-full  h-full' download={true}>
                Download CV
              </a>
          </motion.button>


          <motion.button
            onHoverStart={() => { setcHover(true) }}
            onHoverEnd={() => { setcHover(false) }}
            onClick={() => {
              navigate('/contact')
            }}
            whileHover={{
              color: dark?'black':'white',
              // fontWeight:'bold'
            }}
            style={{
              backgroundColor:'transparent',
              color:dark?'white':'black'
            }}
            transition={{
              duration: 0.3
            }}
            className={` p-1 px-3 md:p-2 md:px-3 z-0 overflow-hidden relative   border-2 ${dark?'border-white':'border-black'} font-extrabold`}
          >
           <motion.span
              initial={{
                x: -12,
                y: 40,
                backgroundColor:dark?'white':'black'
              }}
              transition={{
                duration: 0.4,
                ease:easeIn
              }}
              animate={{
                backgroundColor:dark?'white':'black',
                y:chover?-7:40,
                opacity:chover?1:0,
                scale:chover?1.2:1
              }}
              className='w-full h-full -z-10 bg-white  absolute'></motion.span>
            Contact</motion.button>
        </div>
      </div>

      <div></div>
   
    </div>
  )
}

export default Home
