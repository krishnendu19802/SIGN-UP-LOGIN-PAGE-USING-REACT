import React from 'react'

export default function Navbar(props) {
  return (
    <div className='bg-secondary d-flex align-items-center px-5' style={{height:'40px'}}>
        Sign up Form 
        <button className="btn btn-success ms-auto mx-2" onClick={()=>{props.handleactive('login')}}>Sign In/Sign Up</button>
       

    </div>
  )
}
