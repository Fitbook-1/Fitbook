import React from 'react'
import styles from './appStyles.workout.css'
import Star from '../images/Star 1.png'




function Workout() {
  return (

    <div className="container workout">
      <div className="col-2-3">
      <p>2/23/21</p>
      <h4>HIIT Lower Body and Legs</h4>
      <h4>45 mins</h4>
      </div>
      <div className="col-1-3">
        <p>Created by: Olivia Amato</p>
        <img src={Star}></img>
        <img src={Star}></img>
        <img src={Star}></img>

      </div>    
    </div>


  )
}

export default Workout
