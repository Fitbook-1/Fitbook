import React from 'react'
import './myStyles.css'
import styles from './appStyles.footer.css'
import { FaUserCircle } from "react-icons/fa";
import { BsSearch } from "react-icons/bs"
import { RiHome3Line} from "react-icons/ri"
import { AiOutlineTrophy} from "react-icons/ai"
import { GrAdd} from "react-icons/gr"

function Footer() {
  return (
    <div>
      <footer class="primary-footer group">
      <nav class="nav">
        <ul>
          <li><FaUserCircle size="50px" color="black"/></li>
          <li><BsSearch size="50px" color="black"/></li>
          <li><RiHome3Line size="50px" color="black"/></li>
          <li><AiOutlineTrophy size="50px" color="black" /></li>
          <li><GrAdd size="50px" color="black" /></li>
          </ul>
      </nav>
      
    </footer>
      
    </div>
  )
}

export default Footer
