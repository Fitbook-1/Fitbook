import React, { Component } from 'react'
import './myStyles.css'
import UserInfo from './UserInfo.js'
import Workout from './Workout'
import SharedBar from './ShareBar'
import UploadWorkout from './UploadWorkout'




export class Profile extends Component {
  render() {
    return (
      <div>
        <UserInfo />
        <UploadWorkout />
        <Workout />
        <SharedBar />
        <Workout />
        <SharedBar />
        
      </div>
    )
  }
}

export default Profile
