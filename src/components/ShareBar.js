import React, { Component } from 'react'
import styles from './appStyles.workout.css'
import Heart from '../images/love 1.png'
import Comment from '../images/comment 1.png'

export class ShareBar extends Component {
  render() {
    return (
      <div className="centered share-bar">
        <p>Like</p>
        <p>Comment</p>
        <p>Save</p>

        
      </div>
    )
  }
}

export default ShareBar
