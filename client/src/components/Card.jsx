import React, { useState } from 'react'
import { motion } from 'motion/react'
import { useTheme } from '../Context/ContextProvider'

const Card = ({ src, height, width,url,title,tech }) => {
    const [hover, setHover] = useState(false)
    const [dark] = useTheme()
    return (
        <div className={`h-[${height}] z-10 w-[${width?width:""}] text-center relative border-6  ${dark ? 'border-white' : 'border-black'}  `}>
            <img src={src} className='absolute size-full object-cover' alt="" />
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.8
                }}
                onClick={()=>{
                    setHover(prev=>!prev);
                   }
                }
                animate={{
                    cursor: "pointer",
                    opacity: hover?1:0,
                    scale: hover?0.93:1
                }}
                className={`absolute top-0 text-center font-bold flex justify-center border-1 border-black items-center size-full ${dark ? ' bg-[rgba(13,13,13,0.63)]' : 'bg-white/70'} `}>
                <div className={`flex  flex-col   justify-center`}>
                    <div>{title}</div>
                    <div className='flex justify-center'>
                    <div className='underline'>Tech Stack </div>
                    <div > : {tech}</div>
                    </div>
                    <div className='mx-auto mt-3'>
                    <motion.button
                        onHoverStart={() => { setHover(true) }}
                        onHoverEnd={() => { setHover(false) }}
                        transition={{
                            duration: 0.4
                        }}
                        // whileHover={{
                        //     color: dark ? 'white' : 'black',
                        // }}
                        style={{
                            fontWeight: 'bold',
                            backgroundColor: dark?'white':'black',
                            color: dark ? 'black' : 'white',
                        }}
                        className={`overflow-hidden p-1 px-3 z-10 relative border-2 ${dark ? 'border-white' : 'border-black'}font-extrabold`}
                    >
                        <motion.span
                            initial={{
                                x: -12,
                                y: 40,
                                opacity: 0,
                                backgroundColor: hover ? 'black' : 'white'
                            }}
                            
                            transition={{
                                duration: 1
                            }}
                            animate={{
                                backgroundColor: hover ?dark? 'white':'black' : 'black',
                                y: hover ? -4 : 40,
                                opacity: hover ? 1 : 0,
                                scaleY: hover ? 2 : 1
                            }}
                            className={`w-full h-full -z-20   absolute`}></motion.span>
                        <a
                            href={url} target='__blank' className='w-full  h-full' download={true}>
                            View Project
                        </a>
                    </motion.button>
                    </div>
                </div>
            </motion.div>
            {/* <div className='h-[20em] border-5 border-white '> */}

        </div>
    )
}

export default Card
