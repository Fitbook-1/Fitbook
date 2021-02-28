import React from 'react'
import Avatar from '../images/prof-pic.png'

function UserInfo() {
  return (
    <div className="userBlock">

        <div className="user-pic">
        <img src={Avatar} alt="Avatar"></img>

        </div>
        <div className="user-info">
          <h3>Jane Doe</h3>
          <p>Location: Seattle, WA</p>
          <p>Current Challenges: 3</p>

        </div>

        
      </div>

  )
}

export default UserInfo


