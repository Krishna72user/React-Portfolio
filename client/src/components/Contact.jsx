import React from 'react'
import { motion } from 'motion/react'
import { easeIn } from 'motion';
import { useState } from 'react';
import { useSend } from '../Context/ContextProvider';
import { useTheme } from '../Context/ContextProvider'
import { useRef } from 'react';

// Imports for react-toastify
import { ToastContainer, toast,Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [dark, setDark] = useTheme()

  const fnm = useRef(null)
  const lnm = useRef(null)
  const email = useRef(null)
  const msg = useRef(null)
  const sendData = useSend()
  const [chover, setcHover] = useState(false)
  const notify1 =()=>{toast.success(' Message send successfully!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: dark?"light":'dark',
    transition: Bounce,
    
    });}
  const notify2 =()=>{toast.error('You have already send message before!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: dark?"light":'dark',
    transition: Bounce,
    
    });}

  return (
    <div className='pl-[10vw] pb-[2em] pr-[13vw]'>
       <ToastContainer
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
        className='w-full'
      />
      <div className='font-bold lg:text-6xl md:text-5xl text-4xl border-gray-300 pb-5 border-b-2 '>Contact Me</div>
      <div className='flex justify-between flex-wrap gap-10  '>
        <div className='w-[30em]'>
          <div >
            <div className='flex flex-col gap-8'>
              <div>
                <div className='text-3xl pt-5'>Get in touch</div>
              </div>
              <div className='text-xl font-bold '>
                Email : <a className='underline font-medium hover:text-blue-400 transition text-sm' href="mailto:krishnalaha1234567890@gmail.com">Krishna@gmail.com</a>
              </div>
              <div className='text-xl font-bold '>
                Phone : <a className='underline font-medium text-sm hover:text-blue-400 transition' href="tel:+919641546360">+91 9641546360</a>
              </div>
              <div>
                Let's connect! Whether you have a project in mind, need a developer, or just want to say hi, feel free to reach out. I'm always open to new opportunities and collaborations!</div>
            </div>
          </div>
        </div>
        <div className='w-[35em]'>
          <form className='text-xl' onSubmit={async (e) => {
            e.preventDefault()
            const stat = await sendData(fnm.current.value, lnm.current.value, email.current.value, msg.current.value)
            if (stat) {
              notify1()
              fnm.current.value=""
              lnm.current.value=""
              email.current.value=""
              msg.current.value=""
            }
            else{
              notify2()
            }
            
          }} >
            <div className='flex gap-4 '>
              <input ref={fnm} type="text" id='fname' name='fname' className='border-1 p-4 outline-0 w-full text-sm' placeholder='First name' />
              <input ref={lnm} type="text" id='lname' name='lname' className='border-1 p-4 outline-0 text-sm w-full' placeholder='Last name' />
            </div>
            <input ref={email} type="email" id='email' name='email' className='border-1 p-4 mt-4 outline-0 text-sm w-full' placeholder='Email' />
            <textarea ref={msg} name="msg" id="msg" placeholder='Message' className='border-1 resize-none p-2 my-5 text-sm h-[10em] w-full outline-0' />
            <motion.button
              onHoverStart={() => { setcHover(true) }}
              onHoverEnd={() => { setcHover(false) }}
              whileHover={{
                color: dark ? 'black' : 'white',
              }}
              style={{
                backgroundColor: 'transparent',
                color: dark ? 'white' : 'black'
              }}
              transition={{
                duration: 0.3
              }}
              className={`p-1 px-3 md:p-1 md:px-3 z-0 overflow-hidden relative   border-2 ${dark ? 'border-white' : 'border-black'} font-extrabold`}
            >
              <motion.span
                initial={{
                  x: -12,
                  y: 40,
                  backgroundColor: dark ? 'white' : 'black'
                }}
                transition={{
                  duration: 0.4,
                  ease: easeIn
                }}
                animate={{
                  backgroundColor: dark ? 'white' : 'black',
                  y: chover ? -7 : 40,
                  opacity: chover ? 1 : 0,
                  scale: chover ? 1.2 : 1
                }}
                className='w-full h-full -z-10 bg-white  absolute'></motion.span>
              Send</motion.button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
