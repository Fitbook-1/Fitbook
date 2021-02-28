import React from 'react'
import './myStyles.css'

function UploadWorkout() {
  return (
    <div >
      <a href="/timeline.html">
      <button className="upload">View Friend Activity</button>
      </a>

      <a href="/create.html">
      <button className="upload">Upload New Workout</button>
      </a>

      <a href="/exercise.html">
      <button className="upload">Start Workout</button>

      </a>
      
    </div>
  )
}

export default UploadWorkout
