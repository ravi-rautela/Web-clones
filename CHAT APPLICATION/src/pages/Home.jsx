import React from 'react'
import Sidebar from '../components/SidebarSection/Sidebar'
import Chat from '../components/ChatSection/Chat'

const Home = () => {
  return (
      <div className='home'>
          <div className="container">
              <Sidebar />
              <Chat/>
          </div>
    </div>
  )
}

export default Home