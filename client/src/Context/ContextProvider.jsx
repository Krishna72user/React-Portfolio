import React, { createContext, useState } from 'react'
import { useContext } from 'react'
import axios from 'axios'
export const context = createContext()

export const useHidden=()=>{
    const {hide,setHide} = useContext(context)
    return [hide,setHide]
}
export const useTheme=()=>{
  const {dark,setDark} = useContext(context)
  return [dark,setDark]
}
export const sendData=async(fname,lname,email,msg)=>{
  const body = {
    first_name:fname,
    last_name:lname,
    email,
    msg
  }
  try {
    const res = await axios.post(`${import.meta.env.VITE_HOST}/api/contact`,body)
    return res.data.success
  } catch (error) {
    return error.response.data.success
  }
}

export const useSend=()=>{
  const {sendData} = useContext(context)
  return sendData
}

const ContextProvider = (props) => {
    const [hide,setHide] = useState(false)
    const [open, setOpen] = useState(false)
    const [dark,setDark] = useState(true)
  return (
    <context.Provider value={{hide,setHide,dark,setDark,sendData,open,setOpen}}>
      {props.children}
    </context.Provider>
  )
}

export default ContextProvider
