import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./NavContent.module.css"
const NavContent = () => {
  return (
    <div className="container">
    <div className={`${Styles.navContent} dflex`} style={{paddingLeft: 20}}>
      <div className={Styles.cards}>
        <h2>WELCOME TO LEARNTIMES</h2>
        <h1>Best Online Education</h1>
        <h1>Expertise</h1>
        <p>
          Far far away, behind the word mountains, far from the countries Vokalia</p>
        <p>and Consonantia, there live the blind texts.</p>
        <div className={Styles.LinkBtn}>
          <Link>GET STARTED NOW</Link>
          <Link>VIEW COURSE</Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NavContent