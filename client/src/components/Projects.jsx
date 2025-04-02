import React from 'react'
import Card from './Card'
const Projects = () => {
  return (
    <div className='pl-[10vw] pb-20 pr-[13vw]'>
     <div className='font-bold lg:text-6xl md:text-5xl text-4xl mb-8  pb-5 border-b-1 '>Projects</div>
     <div className='flex w-full justify-center mt-20 gap-20 flex-wrap z-10 '> 
        <div className='flex flex-col w-[20em]  gap-11'> 
        <Card url='https://portfolio-krishna32.netlify.app/' height="20em" src='/portfolio.png' title="My first Portfolio Website ." tech = 'HTML ,CSS ,JavaScript'/>
        <Card url='https://tic-tac-toe163.netlify.app' height="20em" src='/Tic-tac-toe.png' title="A simple Tic-Tac-Toe game ." tech = 'HTML ,CSS ,JavaScript'/>
        <Card url='https://weather-report-app23.netlify.app' height="20em" src='/weather.png' title="A Weather Dashboard ." tech = 'HTML ,CSS ,JavaScript'/>
        </div>
        <div className='flex flex-col w-[20em] gap-10'> 
        <Card url='https://digital-clock3223.netlify.app/' height="20em" src='/digital-clock.png' title="A digital clock ." tech = 'HTML ,CSS ,JavaScript'/>
        <Card url='https://to-do-list-app34.netlify.app/' height="20em" src='/todo.png' title="A simple To-Do List application ." tech = 'HTML ,CSS ,JavaScript'/>
        <Card url='https://contact-form45.netlify.app' height="20em" src='/contac.png' title="A contact form connected to a spreadsheet ." tech = 'HTML ,CSS ,JavaScript'/>
        </div>
        
        <div className='flex flex-col w-[20em] gap-11'> 
        <Card url='https://github.com/Krishna72user/GEN.A.I' height="20em" src='/ai.jpg' title="A console based A.I voice assistant ." tech = 'Python ,Gemini API'/>
        <Card url='https://doc-vault-client.vercel.app' height="20em" src='/doc.png' title="A cloud based document saver web application ." tech = 'MERN stack'/>
        <Card url='https://contact-app-frontend-red.vercel.app' height="20em" src='/contact.png' title="A contact management application ." tech = 'MERN Stack'/>
        </div>
        <Card url='https://i-notebook-frontend-two.vercel.app' height="20em" width='20em' src='/note.png' title="A note saver application ." tech = 'MERN Stack'/>
        
        
     </div>
    </div>
  )
}

export default Projects
