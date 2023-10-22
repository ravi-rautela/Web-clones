import React from 'react'
import User from '../../images/user.png'

const Search = () => {
  return (
      <div className='search'>
          <div className="searchForm">
              <input type="text" placeholder='Search...'/>
          </div>
          <div className="userChat">
              <img src={User} alt="" />
              <div className="userChatInfo">
                  <span>Ravi Rautela</span>
              </div>
          </div>
    </div>
  )
}

export default Search