import React from 'react'
import User from '../../images/user.png'

function Navbar() {
  return (
      <div className='navbar'>
          <span className="nextlogo">Live Chat</span>
          <div className="user">
              <img src={User} alt="" />
             <span classname ="username">Ravi</span>
              <button className='btn2'>Logout</button>
          </div>
    </div>
  )
}

export default Navbar