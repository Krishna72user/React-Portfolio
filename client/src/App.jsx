import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Side from './components/Side'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { useTheme } from './Context/ContextProvider'
import Projects from './pages/Projects'
import Bottom from './components/Bottom'
import { useContext } from 'react';
import { context } from './Context/ContextProvider';
const App = () => {
  const [dark,setDark] = useTheme()
  const {open} = useContext(context)
  return (
    <div className={`${dark?"text-white  bg-slate-950":"text-black  bg-white/96"} min-h-screen`}> 
    {/* Will be changed */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Side/>
     {open && <Bottom/>}
     
    </div>
  )
}

export default App
