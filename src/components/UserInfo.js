import React from 'react'
import Avatar from '../images/prof-pic.png'

function UserInfo() {
  return (
    <div>

        <div className="user-pic">
        <img src={Avatar} alt="Avatar"></img>
          <button>Edit</button>
        </div>
        <div className="user-info">
          <h3>Jane Doe</h3>
          <p>Location: Seattle, WA</p>
          <p>Current Challenges: 3</p>
          <p>Trophy Case: </p>

        </div>

        
      </div>

  )
}

export default UserInfo
