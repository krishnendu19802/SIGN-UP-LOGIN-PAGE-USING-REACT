import React from 'react'
import Login from "./Login"
import Register from './Register'

export default function Signup({ active, handleactive }) {

  return (
    <div className='container-fluid bg-dark text-light my-5 px-3 py-3 d-flex flex-column rounded justify-content-center ' style={{ width: '50%' }}>
      <div className="d-flex fs-4 ">
        {active === 'login' ? 'Login Form' : 'Registration form'}

        <button className="btn btn-primary ms-auto" style={{ height: '35px', width: '35px' }} onClick={() => handleactive('')}>X</button>
      </div>
      <div className='d-flex justify-content-evenly fs-4' style={{cursor:'pointer'}}>
        <div className={`d-flex ${active === 'login' ? 'border-bottom border-light-5' : ''} } bottom_underline justify-content-center mx-5`} onClick={() => handleactive('login')} >Login  </div>
        <div className={`d-flex  justify-content-center mx-5 ${active === 'register' ? 'border-bottom border-light-5' : ''} `} onClick={() => handleactive('register')} >Register</div>
      </div>
      <hr className='bg-secondary' />
      {active === 'login' && <Login handleactive={handleactive} />}
      {active === 'register' && <Register handleactive={handleactive} />}

    </div>
  )
}
