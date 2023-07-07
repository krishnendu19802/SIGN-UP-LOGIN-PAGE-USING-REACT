import React, { useState } from "react"
import Signup from "./Components/Signup"
import Navbar from "./Components/Navbar"
import './app.css'



function App() {
  
  const [active,setActive]=useState("")
  let handleactive=(val)=>{
    setActive(val)
  }
  return (
    <>
    <Navbar handleactive={handleactive}/>
     {(active==='login'|| active==='register') && <Signup handleactive={handleactive} active={active} />}
    </>
  )
}

export default App
